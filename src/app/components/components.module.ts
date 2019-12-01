import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './dialog/event/event.component';
import { BetComponent } from './dialog/bet/bet.component';
import { MarketComponent } from './dialog/market/market.component';
import { MaterialModule } from '../shared/modules/material.module';



@NgModule({
  declarations: [
    EventComponent,
    BetComponent,
    MarketComponent
  ],
  entryComponents: [
    EventComponent,
    BetComponent,
    MarketComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
