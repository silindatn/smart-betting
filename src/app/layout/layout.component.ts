import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  fillerNav = [
    { name: 'Events', icon: '', url: '/events'},
    { name: 'Markets', icon: '', url: '/markets'},
    { name: 'Bets', icon: '', url: '/bets'}
  ];
  constructor() { }

  ngOnInit() {
    // this.fillerNav = Array(16).fill(0)/.map((_, i) => `Nav Item ${i + 1}`);
  }

}
