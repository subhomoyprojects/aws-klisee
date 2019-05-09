import { TestBed } from '@angular/core/testing';

import { BudgetAssumptionService } from './budget-assumption.service';

describe('BudgetAssumptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BudgetAssumptionService = TestBed.get(BudgetAssumptionService);
    expect(service).toBeTruthy();
  });
});
