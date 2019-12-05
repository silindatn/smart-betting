import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsComponent } from './markets.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { LayoutModule } from '@angular/cdk/layout';

describe('MarketsComponent', () => {
  let component: MarketsComponent;
  let fixture: ComponentFixture<MarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ComponentsModule, LayoutModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
