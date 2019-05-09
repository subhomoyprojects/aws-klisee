import { TestBed } from '@angular/core/testing';

import { CounterTopsService } from './counter-tops.service';

describe('CounterTopsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CounterTopsService = TestBed.get(CounterTopsService);
    expect(service).toBeTruthy();
  });
});
