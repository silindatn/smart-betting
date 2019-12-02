import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ApiService } from 'src/app/shared/services/api.service';
import { IMarket } from 'src/app/shared/interfaces/market.interface';

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
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.market.posibleOutcome.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(outcome: string): void {
    const index = this.market.posibleOutcome.indexOf(outcome);

    if (index >= 0) {
      this.market.posibleOutcome.splice(index, 1);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
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
