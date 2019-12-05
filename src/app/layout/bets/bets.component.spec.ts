import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsComponent } from './bets.component';
import { LayoutModule } from '../layout.module';
import { ComponentsModule } from 'src/app/components/components.module';

describe('BetsComponent', () => {
  let component: BetsComponent;
  let fixture: ComponentFixture<BetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ComponentsModule, LayoutModule],
      declarations: [ BetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
