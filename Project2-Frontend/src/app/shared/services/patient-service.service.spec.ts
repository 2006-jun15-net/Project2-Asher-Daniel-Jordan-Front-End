import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PatientServiceService } from './patient-service.service';

describe('PatientServiceService', () => {
  let service: PatientServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientServiceService]
    });
    service = TestBed.inject(PatientServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
