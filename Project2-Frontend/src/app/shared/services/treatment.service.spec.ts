import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TreatmentService } from './treatment.service';

describe('TreatmentService', () => {
  let service: TreatmentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TreatmentService]
    });
    service = TestBed.inject(TreatmentService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get treatments', () => {
    const treatments: any[] = [
      {
        treatmentId: 1,
        illnessId: 3,
        doctorId: 1,
        name: 'giveTest',
        timeToTreat: 7
      },
      {
        treatmentId: 2,
        illnessId: 5,
        doctorId: 2,
        name: 'giveTest',
        timeToTreat: 12
      },
      {
        treatmentId: 3,
        illnessId: 1,
        doctorId: 5,
        name: 'giveTest',
        timeToTreat: 2
      }
    ];

    service.getTreatments().subscribe(list => {
      expect(list.length).toBe(3);
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/Treatments`);
    expect(request.request.method).toBe('GET');

    request.flush(treatments);
  });

  it('should get treatments by doctor', () => {
    const treatments: any[] = [
      {
        treatmentId: 1,
        illnessId: 3,
        doctorId: 1,
        name: 'giveTest',
        timeToTreat: 7
      },
      {
        treatmentId: 2,
        illnessId: 5,
        doctorId: 2,
        name: 'giveTest',
        timeToTreat: 12
      },
      {
        treatmentId: 3,
        illnessId: 1,
        doctorId: 5,
        name: 'giveTest',
        timeToTreat: 2
      }
    ];

    service.getTreatmentsByDoctor(5).subscribe(list => {
      expect(list.length).toBe(1);
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/Treatments/GetByDoctor/5`);
    expect(request.request.method).toBe('GET');

    request.flush(treatments);
  });

  it('should get a treatment', () => {
    const treatment: any = {
      treatmentId: 1,
      illnessId: 3,
      doctorId: 1,
      name: 'giveTest',
      timeToTreat: 7
    };
    service.getTreatmentInfo(1).subscribe(item => {
      expect(item.treatmentId).toBe(1);
      expect(item).toEqual(jasmine.objectContaining({
        treatmentId: 1,
        illnessId: 3,
        doctorId: 1,
        name: 'giveTest',
        timeToTreat: 7
      }));
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/Treatments/1`);
    expect(request.request.method).toBe('GET');

    request.flush(treatment);
  });
});
