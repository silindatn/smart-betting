import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  // Pie
  public pieChartLabels: string[] = [
      'Download Sales',
      'In-Store Sales',
      'Mail Sales'
  ];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: string;

  // events
  public chartClicked(e: any): void {
      // console.log(e);
  }

  public chartHovered(e: any): void {
      // console.log(e);
  }

  constructor() {}

  ngOnInit() {
      this.pieChartType = 'pie';
  }
}
