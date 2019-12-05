import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ApiService } from 'src/app/shared/services/api.service';
import { IMarket } from 'src/app/shared/interfaces/market.interface';
import { IEvent } from 'src/app/shared/interfaces/event.interface';
import { IOutcome } from 'src/app/shared/interfaces/outcome.interface';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  title = '';
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  market: IMarket = {
    eventId: null,
    posibleOutcome: [],
    name: ''
  };
  loading = false;
  isEdit = false;
  events: IEvent[] = [];

  constructor(
    public dialogRef: MatDialogRef<MarketComponent>,
    private apiServ: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: IMarket) {
      if (this.data && this.data.name) {
        this.market = this.data;
        this.isEdit = true;
        this.title = 'Edit MArket';
      } else {
        this.title = 'Add Market';
      }
    }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    const vm = this;
    vm.apiServ.getEvents().subscribe((response: any) => {
      vm.events = response.data;
    });
  }

  newOutcome() {
    this.market.posibleOutcome.push({name: 'outcome ' + this.market.posibleOutcome.length, probability: 1});
  }

  remove(outcome: IOutcome): void {
    const index = this.market.posibleOutcome.findIndex(m => {
      return m.name === outcome.name;
    });

    if (index >= 0) {
      this.market.posibleOutcome.splice(index, 1);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSearchChange(value, index) {
    console.log('......', value);
    if ( value >= 0 && value <= 1) {
      this.market.posibleOutcome[index].probability = value;
    } else {
      this.market.posibleOutcome[index].probability = 0;
    }
  }

  onSave() {
    this.loading = true;
    const vm = this;
    if (vm.isEdit) {
      vm.apiServ.updateMarket(this.market).subscribe((res: any) => {
        vm.loading = false;
        vm.dialogRef.close(res.data);
      }, (error) => {
        vm.loading = false;
      });
    } else {
    vm.apiServ.createMarket(this.market).subscribe((res: any) => {
      vm.loading = false;
      vm.dialogRef.close(res.data);
    }, (error) => {
      vm.loading = false;
    });
  }
  }
}
