import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { LayoutComponent } from './layout.component';
import { EventsComponent } from './events/events.component';
import { MarketsComponent } from './markets/markets.component';
import { BetsComponent } from './bets/bets.component';
import { MaterialModule } from '../shared/modules/material.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@NgModule({
  declarations: [
    LayoutComponent,
    EventsComponent,
    MarketsComponent,
    BetsComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    HttpClientModule,
    Ng2Charts,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.doubleBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#0000b3',
      secondaryColour: '#000066',
      tertiaryColour: '#00001a'
  }),
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
})
export class LayoutModule { }
