import { TestBed } from '@angular/core/testing';

import { AddcreateCouresService } from './addcreate-coures.service';

describe('AddcreateCouresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddcreateCouresService = TestBed.get(AddcreateCouresService);
    expect(service).toBeTruthy();
  });
});
