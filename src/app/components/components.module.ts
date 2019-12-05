import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './dialog/event/event.component';
import { BetComponent } from './dialog/bet/bet.component';
import { MarketComponent } from './dialog/market/market.component';
import { MaterialModule } from '../shared/modules/material.module';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { MarketOutcomeComponent } from './dialog/market-outcome/market-outcome.component';



@NgModule({
  declarations: [
    EventComponent,
    BetComponent,
    MarketComponent,
    MarketOutcomeComponent
  ],
  entryComponents: [
    EventComponent,
    BetComponent,
    MarketComponent,
    MarketOutcomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.doubleBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#0000b3',
      secondaryColour: '#000066',
      tertiaryColour: '#00001a'
  }),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class ComponentsModule { }
