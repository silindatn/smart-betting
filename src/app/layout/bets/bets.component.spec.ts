import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsComponent } from './bets.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('BetsComponent', () => {
  let component: BetsComponent;
  let fixture: ComponentFixture<BetsComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule,
        Ng2Charts,
        HttpClientTestingModule,
        NgxLoadingModule.forRoot({
          animationType: ngxLoadingAnimationTypes.doubleBounce,
          backdropBackgroundColour: 'rgba(0,0,0,0.1)',
          backdropBorderRadius: '4px',
          primaryColour: '#0000b3',
          secondaryColour: '#000066',
          tertiaryColour: '#00001a'
      }),
      ],
      declarations: [ BetsComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.get(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    const dummyResponse = {
      response: {
        info: 'events list',
        version: 1,
        method: 'GET',
        href: 'http://localhost:9000/api/events'
      },
      data: []
    };

    const request = httpMock.expectOne( `http://localhost:9000/api/events`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyResponse);

    const dummyMarket = {
      response: {
        info: 'events list',
        version: 1,
        method: 'GET',
        href: 'http://localhost:9000/api/markets'
      },
      data: []
    }
    const request_market = httpMock.expectOne( `http://localhost:9000/api/markets`);
    expect(request_market.request.method).toBe('GET');
    request_market.flush(dummyMarket);


    const dummyBet = {
      response: {
        info: 'events list',
        version: 1,
        method: 'GET',
        href: 'http://localhost:9000/api/bets'
      },
      data: []
    }
    const request_bet = httpMock.expectOne( `http://localhost:9000/api/bets`);
    expect(request_bet.request.method).toBe('GET');
    request_bet.flush(dummyBet);
    expect(component).toBeTruthy();
  });
});
