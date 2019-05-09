import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetAssumptionComponent } from './budget-assumption.component';

describe('BudgetAssumptionComponent', () => {
  let component: BudgetAssumptionComponent;
  let fixture: ComponentFixture<BudgetAssumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetAssumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetAssumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
