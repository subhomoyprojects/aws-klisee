import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCalculationComponent } from './budget-calculation.component';

describe('BudgetCalculationComponent', () => {
  let component: BudgetCalculationComponent;
  let fixture: ComponentFixture<BudgetCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
