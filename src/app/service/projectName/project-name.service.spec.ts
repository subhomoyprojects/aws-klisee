import { TestBed } from '@angular/core/testing';

import { ProjectNameService } from './project-name.service';

describe('ProjectNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectNameService = TestBed.get(ProjectNameService);
    expect(service).toBeTruthy();
  });
});
