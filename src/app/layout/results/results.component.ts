import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { IBet } from 'src/app/shared/interfaces/bet.interface';
import { IMarket } from 'src/app/shared/interfaces/market.interface';
import { IEvent } from 'src/app/shared/interfaces/event.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'Event Name',
    'Market Name',
    'OutCome',
    'Win Prob.',
    'Amount',
    'Payout'
  ];
  // Pie
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: string;
  charts: any[] = [];
  dataSource = new MatTableDataSource<IBet>([]);
  loading = false;
  markets: IMarket[] = [];
  events: IEvent[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private apiServ: ApiService) {}

  ngOnInit() {
    this.getEvents();
    this.getMarkets();
    this.pieChartType = 'pie';
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getReport();
  }

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
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
    vm.apiServ.getEvents().subscribe(
      (response: any) => {
        console.log('......', response);
        vm.loading = false;
        vm.events = response.data;
      },
      error => {
        vm.loading = false;
      }
    );
  }
  getMarkets() {
    const vm = this;
    vm.loading = true;
    vm.apiServ.getMarkets().subscribe(
      (response: any) => {
        console.log('......', response);
        vm.loading = false;
        vm.markets = response.data;
      },
      error => {
        vm.loading = false;
      }
    );
  }

  getReport() {
    const vm = this;
    vm.loading = true;
    vm.apiServ.getReport().subscribe(
      (res: any) => {
        vm.dataSource.data = res.data.data;
        vm.charts = res.data.charts;
        vm.loading = false;
      },
      error => {
        vm.loading = false;
      }
    );
  }
  getTotalAmount() {
    return this.dataSource.data
      .map(t => t.amount)
      .reduce((acc, value) => acc + value, 0);
  }
  getTotalWinings() {
    return this.dataSource.data
      .map(t => t.winings)
      .reduce((acc, value) => acc + value, 0);
  }
}
