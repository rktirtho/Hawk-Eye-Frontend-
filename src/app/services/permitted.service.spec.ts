import { TestBed } from '@angular/core/testing';

import { PermittedService } from './permitted.service';

describe('PermittedService', () => {
  let service: PermittedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermittedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
