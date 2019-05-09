import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountertopsBudgetComponent } from './countertops-budget.component';

describe('CountertopsBudgetComponent', () => {
  let component: CountertopsBudgetComponent;
  let fixture: ComponentFixture<CountertopsBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountertopsBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountertopsBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
