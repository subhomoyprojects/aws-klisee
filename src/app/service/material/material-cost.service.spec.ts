import { TestBed } from '@angular/core/testing';

import { MaterialCostService } from './material-cost.service';

describe('MaterialCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialCostService = TestBed.get(MaterialCostService);
    expect(service).toBeTruthy();
  });
});
