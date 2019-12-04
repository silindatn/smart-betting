import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketOutcomeComponent } from './market-outcome.component';

describe('MarketOutcomeComponent', () => {
  let component: MarketOutcomeComponent;
  let fixture: ComponentFixture<MarketOutcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketOutcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
