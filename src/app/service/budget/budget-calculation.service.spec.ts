import { TestBed } from '@angular/core/testing';

import { BudgetCalculationService } from './budget-calculation.service';

describe('BudgetCalculationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BudgetCalculationService = TestBed.get(BudgetCalculationService);
    expect(service).toBeTruthy();
  });
});
