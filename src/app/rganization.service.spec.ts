import { TestBed } from '@angular/core/testing';

import { RganizationService } from './organization.service';

describe('RganizationService', () => {
  let service: RganizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RganizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
