import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetComponent } from './bet.component';
import { ComponentsModule } from '../../components.module';

describe('BetComponent', () => {
  let component: BetComponent;
  let fixture: ComponentFixture<BetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ComponentsModule],
      declarations: [ BetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
