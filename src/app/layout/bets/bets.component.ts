import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { IEvent } from 'src/app/shared/interfaces/event.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { EventComponent } from 'src/app/components/dialog/event/event.component';
import { IBet } from 'src/app/shared/interfaces/bet.interface';
import { IMarket } from 'src/app/shared/interfaces/market.interface';
import * as _ from 'lodash';
import { BetComponent } from 'src/app/components/dialog/bet/bet.component';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Event Name', 'Market Name', 'OutCome', 'Win Prob.', 'Amount', 'menu'];
  dataSource = new MatTableDataSource<IBet>([]);
  loading = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  markets: IMarket[] = [];
  events: IEvent[] = [];

  constructor(
    public dialog: MatDialog,
    private apiServ: ApiService
  ) {}

  ngOnInit() {
    this.getEvents();
    this.getMarkets();
    this.getBets();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(element) {
    const vm = this;
    const dialogRef = vm.dialog.open(BetComponent, {width: '500px', data: element});
    dialogRef.afterClosed().subscribe((event: IBet) => {
      if (event) {
        vm.getBets();
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayEventName(element: IBet) {
    const index = _.findIndex(this.events, ['id', element.eventId]);

    return index >= 0 ? this.events[index].name : null;
  }

  displayMarketName(element: IBet) {
    const index = _.findIndex(this.markets, ['id', element.marketId]);

    return index >= 0 ? this.markets[index].name : null;
  }

  getEvents() {
    const vm = this;
    vm.loading = true;
    vm.apiServ.getEvents().subscribe((response: any) => {
      console.log('......', response);
      vm.loading = false;
      vm.events = response.data;
    }, (error) => {
      vm.loading = false;
    });
  }
  getMarkets() {
    const vm = this;
    vm.loading = true;
    vm.apiServ.getMarkets().subscribe((response: any) => {
      console.log('......', response);
      vm.loading = false;
      vm.markets = response.data;
    }, (error) => {
      vm.loading = false;
    });
  }
  getBets() {
    const vm = this;
    vm.loading = true;
    vm.apiServ.getBets().subscribe((response: any) => {
      console.log('......', response);
      vm.loading = false;
      vm.dataSource.data = response.data;
    }, (error) => {
      vm.loading = false;
    });
  }

}
