import { TestBed, inject } from '@angular/core/testing';

import { MedicalshopService } from './medicalshop.service';

describe('MedicalshopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicalshopService]
    });
  });

  it('should be created', inject([MedicalshopService], (service: MedicalshopService) => {
    expect(service).toBeTruthy();
  }));
});
