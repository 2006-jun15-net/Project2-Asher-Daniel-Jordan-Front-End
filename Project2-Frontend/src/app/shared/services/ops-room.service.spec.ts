import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OpsRoomService } from './ops-room.service';

describe('OpsRoomService', () => {
  let service: OpsRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(OpsRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
