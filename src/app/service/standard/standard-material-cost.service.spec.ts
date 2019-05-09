import { TestBed } from '@angular/core/testing';

import { StandardMaterialCostService } from './standard-material-cost.service';

describe('StandardMaterialCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StandardMaterialCostService = TestBed.get(StandardMaterialCostService);
    expect(service).toBeTruthy();
  });
});
