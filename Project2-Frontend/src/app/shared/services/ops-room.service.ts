import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { OpsRoom } from '../models/opsroom';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class OpsRoomService {
  private serviceUrl = 'https://localhost:44362/api/OpsRooms';
  // private serviceUrl = 'https://project2-hospital-frontend.azurewebsites.net/api/OpsRooms';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) { }

  public getOpsRooms(): Observable<OpsRoom[]> {
    return this.http.get<OpsRoom[]>(`${this.serviceUrl}`)
    .pipe(
      map(data => data.map(data => new OpsRoom().deserialize(data)))
    );
  }

  public getAvailableRooms(): Observable<OpsRoom[]> {
    return this.http.get<OpsRoom[]>(`${this.serviceUrl}/AvailableRooms`)
    .pipe(
      map(data => data.map(data => new OpsRoom().deserialize(data)))
    );
  }

  public updateRoom(opsRoom: OpsRoom): Observable<OpsRoom> {
    return this.http.put<OpsRoom>(`${this.serviceUrl}/${opsRoom.opsRoomId}`, opsRoom);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
