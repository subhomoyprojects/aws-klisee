import { TestBed } from '@angular/core/testing';

import { CounterBudgetService } from './counter-budget.service';

describe('CounterBudgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CounterBudgetService = TestBed.get(CounterBudgetService);
    expect(service).toBeTruthy();
  });
});
