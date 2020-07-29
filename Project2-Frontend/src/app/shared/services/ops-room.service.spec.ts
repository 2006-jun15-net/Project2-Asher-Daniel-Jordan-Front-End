import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OpsRoomService } from './ops-room.service';
import { OpsRoom } from '../models/opsroom';

describe('OpsRoomService', () => {
  let service: OpsRoomService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OpsRoomService]
    });
    service = TestBed.get(OpsRoomService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get all opsRooms', () => {
    const rooms: any[] = [
      {
        opsRoomId: 1,
        available: true
      },
      {
        opsRoomId: 2,
        available: true
      },
      {
        opsRoomId: 3,
        available: false
      }
    ];

    service.getOpsRooms().subscribe(opRooms => {
      expect(opRooms.length).toBe(3);
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/OpsRooms`);
    expect(request.request.method).toBe('GET');

    request.flush(rooms);
  })

  it('should get all available rooms', () => {
    const rooms: any[] = [
      {
        opsRoomId: 1,
        available: true
      },
      {
        opsRoomId: 2,
        available: true
      }
    ];

    service.getAvailableRooms().subscribe(opRooms => {
      expect(opRooms.length).toBe(2);
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/OpsRooms/AvailableRooms`);
    expect(request.request.method).toBe('GET');

    request.flush(rooms);
  })

  it('should update a room', () => {
    const opRoom: any = {
      opsRoomId: 1,
      available: true
    };

    service.updateRoom({opsRoomId: 1, available: true} as OpsRoom).subscribe(room => {
      expect(room.available).toBe(true);
      expect(room).toEqual(jasmine.objectContaining({
        opsRoomId: 1,
        available: true
      }));
    });

    const request = httpMock.expectOne(`https://localhost:44362/api/OpsRooms/1`);
    expect(request.request.method).toBe('PUT');

    request.flush(opRoom);
  })
});
