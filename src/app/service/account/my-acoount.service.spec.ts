import { TestBed } from '@angular/core/testing';

import { MyAcoountService } from './my-acoount.service';

describe('MyAcoountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAcoountService = TestBed.get(MyAcoountService);
    expect(service).toBeTruthy();
  });
});
