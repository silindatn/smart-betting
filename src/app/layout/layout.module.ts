import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { EventsComponent } from './events/events.component';
import { MarketsComponent } from './markets/markets.component';
import { BetsComponent } from './bets/bets.component';
import { MaterialModule } from '../shared/modules/material.module';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    LayoutComponent,
    EventsComponent,
    MarketsComponent,
    BetsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ]
})
export class LayoutModule { }
