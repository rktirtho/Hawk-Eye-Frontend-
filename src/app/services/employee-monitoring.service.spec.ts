import { TestBed } from '@angular/core/testing';

import { EmployeeMonitoringService } from './employee-monitoring.service';

describe('EmployeeMonitoringService', () => {
  let service: EmployeeMonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
