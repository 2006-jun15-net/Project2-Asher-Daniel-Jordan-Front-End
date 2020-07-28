import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TreatmentDetailsService } from './treatment-details.service';

describe('TreatmentDetailsService', () => {
  let service: TreatmentDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TreatmentDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
