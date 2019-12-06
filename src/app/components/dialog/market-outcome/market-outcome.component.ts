import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/shared/services/api.service';
import { IMarket } from 'src/app/shared/interfaces/market.interface';

@Component({
  selector: 'app-market-outcome',
  templateUrl: './market-outcome.component.html',
  styleUrls: ['./market-outcome.component.scss']
})
export class MarketOutcomeComponent implements OnInit {

  title = '';
  market: IMarket;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<MarketOutcomeComponent>,
    private apiServ: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: IMarket) {
        this.market = this.data;
        if (this.market && this.market.actualOutcome.name) {
          this.title = 'Edit Market Outcome';
        } else {
          this.title = 'Add Market Outcome';
        }
        console.log('....vet....', this.data);
    }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    this.loading = true;
    const vm = this;
    vm.apiServ.updateMarket(this.market).subscribe((res: any) => {
        vm.loading = false;
        vm.dialogRef.close(res.data);
      }, () => {
        vm.loading = false;
      });
  }
}
