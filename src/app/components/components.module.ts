import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './dialog/event/event.component';
import { BetComponent } from './dialog/bet/bet.component';
import { MarketComponent } from './dialog/market/market.component';
import { MaterialModule } from '../shared/modules/material.module';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';



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
    MaterialModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
  }),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }
