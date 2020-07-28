import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class FindPatientService {
  private serviceUrl = 'https://localhost:44362/api/Patients';
  // private serviceUrl = 'https://project2-hospital-frontend.azurewebsites.net/api/Patients';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) { }

  public getDocterPatients(doctorId: number): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.serviceUrl}/Doctors/${doctorId}`)
    .pipe(
      map(resultData => resultData.map(data => new Patient().deserialize(data)))
    );
  }

  public getPatientByRoom(roomId: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.serviceUrl}/PatientRoom/${roomId}`)
    .pipe(
      map(data => new Patient().deserialize(data))
    );
  }
}
