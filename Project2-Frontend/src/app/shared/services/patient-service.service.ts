import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Patient } from '../models/patient'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  private readonly serviceUrl = environment.Url +'/api/Patients';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.serviceUrl}`)
    .pipe(
      map(resultData => resultData.map(data => new Patient().deserialize(data)))
    );
  }
  
  // GET doctor by id
  public getDoctor(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.serviceUrl}/${id}`).pipe(
      map(data => new Patient().deserialize(data),
      catchError(() => this.handleError<Patient>(`getDoctor id =${id}`))
    ));
  }
  
  // POST Doctor
  public addDoctor(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.serviceUrl}`, patient,
    this.httpOptions).pipe(
      map(data => new Patient().deserialize(data)),
      catchError(this.handleError<Patient>('addDoctor'))
    );
  }
  
  // DELETE Doctor
  public deleteDoctor(patient: Patient | number): Observable<Patient> {
    const id = typeof patient === 'number' ? patient : patient.patientId;
  
    return this.http.delete<Patient>(`${this.serviceUrl}/${id}`,
    this.httpOptions).pipe(
      catchError(this.handleError<Patient>('deleteDoctor'))
    );
  }
  
  // PUT Doctor
  public updateDoctor(patient: Patient): Observable<any> {
    return this.http.put(`${this.serviceUrl}/${patient.patientId}`, patient,
     this.httpOptions).pipe(
      map(data => new Patient().deserialize(data)),
      catchError(this.handleError<any>('updateDoctor'))
     );
  }

  


 private handleError<T>(operation = 'operation', result?: T): any {
   return (error: any): Observable<T> => {

     // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead

     // Let the app keep running by returning an empty result.
     return of(result as T);
   };
  }
}
