import { TestBed } from '@angular/core/testing';

import { ParentremodelService } from './parentremodel.service';

describe('ParentremodelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentremodelService = TestBed.get(ParentremodelService);
    expect(service).toBeTruthy();
  });
});
