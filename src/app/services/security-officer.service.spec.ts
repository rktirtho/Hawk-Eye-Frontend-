import { TestBed } from '@angular/core/testing';

import { SecurityOfficerService } from './security-officer.service';

describe('SecurityOfficerService', () => {
  let service: SecurityOfficerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityOfficerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
