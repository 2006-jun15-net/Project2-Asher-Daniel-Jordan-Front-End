import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { OpsRoom } from '../models/opsroom';
import { ThrowStmt } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpsRoomService {
  private readonly serviceUrl = environment.Url + '/api/OpsRooms';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) { }

  public getOpsRooms(): Observable<OpsRoom[]> {
    return this.http.get<OpsRoom[]>(`${this.serviceUrl}`)
    .pipe(
      map(resultData => resultData.map(data => new OpsRoom().deserialize(data)))
    );
  }

  public getAvailableRooms(): Observable<OpsRoom[]> {
    return this.http.get<OpsRoom[]>(`${this.serviceUrl}/AvailableRooms`)
    .pipe(
      map(resultData => resultData.map(data => new OpsRoom().deserialize(data)))
    );
  }

  public updateRoom(opsRoom: OpsRoom): Observable<OpsRoom> {
    return this.http.put<OpsRoom>(`${this.serviceUrl}/${opsRoom.opsRoomId}`, opsRoom);
  }
}
