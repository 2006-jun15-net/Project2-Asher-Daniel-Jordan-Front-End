import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DoctorService } from './doctor.service';
import { Doctor } from '../models/doctor';

describe('DoctorService', () => {
  let service: DoctorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DoctorService]
    });
    service = TestBed.inject(DoctorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get a doctor', () => {
    const doctorItem: any = {
      doctorId: 2,
      firstName: 'testDummy',
      lastName: 'testLast'
    };

    service.getDoctor(2).subscribe(doctor => {
      expect(doctor.doctorId).toBe(2);
      expect(doctor).toEqual(jasmine.objectContaining({
        doctorId: 2,
        firstName: 'testDummy',
        lastName: 'testLast'
      }));
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/Doctors/2`);
    expect(request.request.method).toBe('GET');

    request.flush(doctorItem);
  });

  it('Should get a list of doctors', () => {
    const doctorItems: any[] = [
      {
        doctorId: 2,
        firstName: 'testDummy',
        lastName: 'testLast'
      },
      {
        doctorId: 5,
        firstName: 'testDummy5',
        lastName: 'testLast5'
      },
      {
        doctorId: 1,
        firstName: 'testDummy1',
        lastName: 'testLast1'
      }
    ];

    service.getDoctors().subscribe(doctors => {
      expect(doctors.length).toBe(3);
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/Doctors`);
    expect(request.request.method).toBe('GET');

    request.flush(doctorItems);
  });

  it('should create a new doctor', () => {
    const response: any = {
      doctorId: 6,
      firstName: 'newTestDummy6',
      lastName: 'newTestLast6'
    };

    service.addDoctor({doctorId: 6, firstName: 'newTestDummy6', lastName: 'newTestLast6'} as Doctor)
    .subscribe(doctor => {
      expect(doctor).toEqual(jasmine.objectContaining({
        doctorId: 6,
        firstName: 'newTestDummy6',
        lastName: 'newTestLast6'
      }));
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/Doctors`);
    expect(request.request.method).toBe('POST');

    request.flush(response);
  });

  it('should update a doctor', () => {
    const response: any = {
      doctorId: 6,
      firstName: 'newTestDummy6',
      lastName: 'newTestLast6'
    };

    service.updateDoctor({doctorId: 6, firstName: 'newTestDummy6', lastName: 'newTestLast6'} as Doctor)
    .subscribe(doctor => {
      expect(doctor.firstName).toBe('newTestDummy6');
      expect(doctor.lastName).toBe('newTestLast6');
      expect(doctor).toEqual(jasmine.objectContaining({
        doctorId: 6,
        firstName: 'newTestDummy6',
        lastName: 'newTestLast6'
      }));
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/Doctors/6`);
    expect(request.request.method).toBe('PUT');

    request.flush(response);
  });

  it('should delete a doctor', () => {
    const response: any =
      {
        doctorId: 2,
        firstName: 'testDummy',
        lastName: 'testLast'
      };

    service.deleteDoctor({doctorId: 2, firstName: 'testDummy', lastName: 'testLast'} as Doctor)
    .subscribe(doctor => {
      expect(doctor.doctorId).toBe(2);
      expect(doctor).toEqual(jasmine.objectContaining({
        doctorId: 2,
        firstName: 'testDummy',
        lastName: 'testLast'
      }));
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/Doctors/2`);
    expect(request.request.method).toBe('DELETE');

    request.flush(response);
  });
});
