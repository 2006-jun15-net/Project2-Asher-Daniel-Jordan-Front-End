import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FindPatientService } from './findPatient.service';

describe('FindPatientService', () => {
  let service: FindPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FindPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
