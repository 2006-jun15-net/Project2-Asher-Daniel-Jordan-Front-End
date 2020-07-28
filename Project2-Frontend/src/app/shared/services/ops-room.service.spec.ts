import { TestBed } from '@angular/core/testing';

import { OpsRoomService } from './ops-room.service';

describe('OpsRoomService', () => {
  let service: OpsRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpsRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
