import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;
  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
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
      declarations: [ EventsComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ApiService);
    fixture.detectChanges();
  });

  xit('should create', () => {
    // spyOn(service, 'getEvents').and.returnValue();
    expect(component).toBeTruthy();
  });
});
