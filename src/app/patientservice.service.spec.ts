import { TestBed, inject } from '@angular/core/testing';

import { PatientserviceService } from './patientservice.service';

describe('PatientserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientserviceService]
    });
  });

  it('should be created', inject([PatientserviceService], (service: PatientserviceService) => {
    expect(service).toBeTruthy();
  }));
});
