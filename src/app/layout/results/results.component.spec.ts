import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

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
      declarations: [ ResultsComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
