import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MarketComponent } from 'src/app/components/dialog/market/market.component';
import { MatDialog } from '@angular/material';
import { ApiService } from 'src/app/shared/services/api.service';
import { IEvent } from 'src/app/shared/interfaces/event.interface';
import { IMarket } from 'src/app/shared/interfaces/market.interface';

import * as _ from 'lodash';
import { MarketOutcomeComponent } from 'src/app/components/dialog/market-outcome/market-outcome.component';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MarketsComponent implements OnInit {

  dataSource: IMarket[] = [];
  columnsToDisplay = ['id', 'name', 'Event Name', 'Results', 'menu'];
  expandedElement: IMarket | null;
  loading = false;
  events: IEvent[] = [];

  constructor(
    public dialog: MatDialog,
    private apiServ: ApiService
    ) { }

  ngOnInit() {
    this.getEvents();
    this.getMarkets();
  }

  openDialog(element) {
    const vm = this;
    const dialogRef = vm.dialog.open(MarketComponent, {width: '500px', data: element});
    dialogRef.afterClosed().subscribe((market: IMarket) => {
      if (market) {
        vm.getMarkets();
      }
    });
  }
  openOutcomeDialog(element) {
    const vm = this;
    const dialogRef = vm.dialog.open(MarketOutcomeComponent, {width: '500px', data: element});
    dialogRef.afterClosed().subscribe((market: IMarket) => {
      if (market) {
        vm.getMarkets();
      }
    });
  }
  getMarkets() {
    const vm = this;
    vm.loading = true;
    vm.apiServ.getMarkets().subscribe((response: any) => {
      vm.dataSource = response.data;
      vm.loading = false;
    }, error => {
      vm.loading = false;
    });
  }

  getEvents() {
    const vm = this;
    vm.loading = true;
    vm.apiServ.getEvents().subscribe((response: any) => {
      vm.events = response.data;
      vm.loading = false;
    }, error => {
      vm.loading = false;
    });
  }

  eventDisplayName(element: IMarket) {
    const index = _.findIndex(this.events, ['id', element.eventId]);

    return index >= 0 ? this.events[index].name : null;
  }

}

