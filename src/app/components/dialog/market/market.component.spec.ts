import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketComponent } from './market.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('MarketComponent', () => {
  let component: MarketComponent;
  let fixture: ComponentFixture<MarketComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
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
  declarations: [ MarketComponent ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketComponent);
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
    expect(component).toBeTruthy();
  });
});
