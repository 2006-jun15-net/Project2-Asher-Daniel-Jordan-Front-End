import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FindPatientService } from './findPatient.service';

describe('FindPatientService', () => {
  let service: FindPatientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FindPatientService]
    });
    service = TestBed.inject(FindPatientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch patient as observable', () => {
    const patientItem: any =
      {
        patientId: 1,
        patientRoomId: 5,
        firstName: 'Test',
        lastName: 'TestLast',
      };

    service.getPatientByRoom(5).subscribe(patient => {
      expect(patient.patientRoomId).toBe(5);
      expect(patient).toEqual(jasmine.objectContaining({
        patientId: 1,
        patientRoomId: 5,
        firstName: 'Test',
        lastName: 'TestLast',
      }));
    });
    const request = httpMock.expectOne(`https://localhost:44362/api/Patients/PatientRoom/5`);
    expect(request.request.method).toBe('GET');

    request.flush(patientItem);
  });

  it('should fetch patients as observable', () => {
    const tableItems: any[] = [
      // {
      //   doctorId: 2,
      //   firstName: "Test",
      //   lastName: "TestLast"
      // },
      // {
      //   treatmentId: 4,
      //   illnessId: 1,
      //   doctorId: 2,
      //   name: "TestTreatment",
      //   timeToTreat: "3"
      // },
      // {
      //   treatmentDetailsId: 1,
      //   treatmentId: 4,
      //   patientId: 1,
      //   opsRoomId: 1,
      //   startTime: ""
      // },
      // {
      //   treatmentDetailsId: 2,
      //   treatmentId: 4,
      //   patientId: 2,
      //   opsRoomId: 2,
      //   startTime: ""
      // },
      {
        patientId: 1,
        patientRoomId: 1,
        firstName: 'PTest1',
        lastName: 'PTestLast1'
      },
      {
        patientId: 2,
        patientRoomId: 2,
        firstName: 'PTest2',
        lastName: 'PTestLast2'
      }
    ];

    service.getDocterPatients(2).subscribe( patients => {
      expect(patients.length).toBe(2);
    });
    const request = httpMock.expectOne(`https://localhost:44362/api/Patients/Doctors/2`);
    expect(request.request.method).toBe('GET');

    request.flush(tableItems);
  });
});
