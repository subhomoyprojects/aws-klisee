import { TestBed } from '@angular/core/testing';

import { FlooringService } from './flooring.service';

describe('FlooringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlooringService = TestBed.get(FlooringService);
    expect(service).toBeTruthy();
  });
});
