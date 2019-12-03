import { Component, OnInit, Inject } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { IMarket } from 'src/app/shared/interfaces/market.interface';
import { IEvent } from 'src/app/shared/interfaces/event.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MarketComponent } from '../market/market.component';
import { ApiService } from 'src/app/shared/services/api.service';
import { IOutcome } from 'src/app/shared/interfaces/outcome.interface';
import { IBet } from 'src/app/shared/interfaces/bet.interface';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit {

  title = '';
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  bet: IBet = {
    eventId: null,
    posibleOutcome: null,
    marketId: null,
    amount: 0,
    userId: null
  };
  loading = false;
  isEdit = false;
  events: IEvent[] = [];
  markets: IMarket[] = [];
  posibleOutcomes: IOutcome[] = [];

  constructor(
    public dialogRef: MatDialogRef<BetComponent>,
    private apiServ: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: IBet) {
      if (this.data && this.data.eventId) {
        this.bet = this.data;
        this.isEdit = true;
        this.title = 'Edit Bet';
      } else {
        this.title = 'Add Bet';
      }
    }

  ngOnInit() {
    this.getEvents();
    this.getMarkets();
  }

  getEvents() {
    const vm = this;
    vm.apiServ.getEvents().subscribe((response: any) => {
      vm.events = response.data;
    });
  }
  getMarkets() {
    const vm = this;
    vm.apiServ.getMarkets().subscribe((response: any) => {
      vm.markets = response.data;
    });
  }

  onMarketSelect() {
    const index = this.markets.findIndex(m => {
      return m.id === this.bet.marketId;
    });
    this.posibleOutcomes = this.markets[index].posibleOutcome;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    this.loading = true;
    const vm = this;
    if (vm.isEdit) {
      vm.apiServ.updateBet(this.bet).subscribe((res: any) => {
        vm.loading = false;
        vm.dialogRef.close(res.data);
      }, (error) => {
        vm.loading = false;
      });
    } else {
    vm.apiServ.createBet(this.bet).subscribe((res: any) => {
      vm.loading = false;
      vm.dialogRef.close(res.data);
    }, (error) => {
      vm.loading = false;
    });
  }
  }
}
