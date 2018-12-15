import { TestBed } from '@angular/core/testing';

import { CoureseService } from './courese.service';

describe('CoureseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoureseService = TestBed.get(CoureseService);
    expect(service).toBeTruthy();
  });
});
