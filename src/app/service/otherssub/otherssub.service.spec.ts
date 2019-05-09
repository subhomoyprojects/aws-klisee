import { TestBed } from '@angular/core/testing';

import { OtherssubService } from './otherssub.service';

describe('OtherssubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtherssubService = TestBed.get(OtherssubService);
    expect(service).toBeTruthy();
  });
});
