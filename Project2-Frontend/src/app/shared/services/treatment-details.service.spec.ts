import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TreatmentDetailsService } from './treatment-details.service';
import { TreatmentDetails } from '../models/treatmentDetails';

describe('TreatmentDetailsService', () => {
  let service: TreatmentDetailsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TreatmentDetailsService]
    });
    service = TestBed.inject(TreatmentDetailsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get a treatmentDetail', () => {
    const detail: any = {
      treatmentDetailsId: 1,
      treatmentId: 2,
      patientId: 4,
      opsRoomId: 10,
      startTime: 'test'
    };

    service.getTreatmentDetail(1).subscribe(td => {
      expect(td.treatmentDetailsId).toBe(1);
      expect(td).toEqual(jasmine.objectContaining({
        treatmentDetailsId: 1,
        treatmentId: 2,
        patientId: 4,
        opsRoomId: 10,
        startTime: 'test'
      }));
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/TreatmentDetails/1`);
    expect(request.request.method).toBe('GET');

    request.flush(detail);
  });

  it('should get a patients treatment detail', () => {
    const detail: any = {
      treatmentDetailsId: 1,
      treatmentId: 2,
      patientId: 4,
      opsRoomId: 10,
      startTime: 'test'
    };
    service.getPatientTreatment(4).subscribe(td => {
      expect(td.patientId).toBe(4);
      expect(td).toEqual(jasmine.objectContaining({
        treatmentDetailsId: 1,
        treatmentId: 2,
        patientId: 4,
        opsRoomId: 10,
        startTime: 'test'
      }));
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/TreatmentDetails/GetPatientsTreatment/4`);
    expect(request.request.method).toBe('GET');

    request.flush(detail);
  });

  it('should create a new treatment detail', () => {
    const detail: any = {
      treatmentDetailsId: 2,
      treatmentId: 5,
      patientId: 2,
      opsRoomId: 6,
      startTime: 'newTest'
    };
    service.createTreatmentDetail({
      treatmentDetailsId: 2,
      treatmentId: 5,
      patientId: 2,
      opsRoomId: 6,
      startTime: 'newTest'
    } as TreatmentDetails).subscribe(td => {
      expect(td).toEqual(jasmine.objectContaining({
        treatmentDetailsId: 2,
        treatmentId: 5,
        patientId: 2,
        opsRoomId: 6,
        startTime: 'newTest'
      }));
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/TreatmentDetails`);
    expect(request.request.method).toBe('POST');

    request.flush(detail);
  });

  it('should update a treatment detail', () => {
    const detail: any = {
      treatmentDetailsId: 2,
      treatmentId: 5,
      patientId: 2,
      opsRoomId: 6,
      startTime: 'Test'
    };
    service.updateTreatmentDetail({
      treatmentDetailsId: 2,
      treatmentId: 5,
      patientId: 2,
      opsRoomId: 6,
      startTime: 'Test'
    } as TreatmentDetails).subscribe(td => {
      expect(td).toEqual(jasmine.objectContaining({
        treatmentDetailsId: 2,
        treatmentId: 5,
        patientId: 2,
        opsRoomId: 6,
        startTime: 'Test'
      }));
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/TreatmentDetails/2`);
    expect(request.request.method).toBe('PUT');

    request.flush(detail);
  });
});
