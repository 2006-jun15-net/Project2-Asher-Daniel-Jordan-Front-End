import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FindPatientService } from './findPatient.service';
import { Patient } from '../models/patient';

describe('FindPatientService', () => {
  let service: FindPatientService;
  let httpMock: HttpTestingController;
  let serviceUrl: 'https://localhost:44362/api/Patients';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FindPatientService]
    });
    //service = TestBed.inject(FindPatientService);
    service = TestBed.get(FindPatientService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getDoctorPatients', () => {

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch patient as observable', () => {
    const patientItem: any =
      {
        patientId: 1,
        patientRoomId: 5,
        firstName: 'Test1',
        lastName: 'TestLast1',
      };

    service.getPatientByRoom(5).subscribe(patient => {
      expect(patient.patientRoomId).toBe(5);
      //expect(Object(patient)).toEqual(patientItem);
    });
    const request = httpMock.expectOne(`https://localhost:44362/api/Patients/PatientRoom/5`);
    expect(request.request.method).toBe('GET');

    request.flush(patientItem);
  })
});
