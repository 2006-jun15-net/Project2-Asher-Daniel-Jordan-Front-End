import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Doctor } from '../models/doctor';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  //private serviceUrl = 'https://localhost:44362/api/Doctors';
  private serviceUrl = 'https://project2-hospital.azurewebsites.net/api/Doctors';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  constructor(private http: HttpClient) {  }


// grap data from backend:
//GET all doctors
public getDoctors(): Observable<Doctor[]> {
  return this.http.get<Doctor[]>(`${this.serviceUrl}`)
  .pipe(
    map(data => data.map(data => new Doctor().deserialize(data)))
  );
}

//GET doctor by id
public getDoctor(id: number): Observable<Doctor> {
  return this.http.get<Doctor>(`${this.serviceUrl}/${id}`).pipe(
    map(data => new Doctor().deserialize(data),
    catchError(() => this.handleError<Doctor>(`getDoctor id =${id}`))
  ));
}

// POST Doctor
public addDoctor (doctor: Doctor): Observable<Doctor> {
  return this.http.post<Doctor>(`${this.serviceUrl}`, doctor, 
  this.httpOptions).pipe(
    map(data => new Doctor().deserialize(data)),
    catchError(this.handleError<Doctor>('addDoctor'))
  );
}

//DELETE Doctor
public deleteDoctor(doctor: Doctor | number): Observable<Doctor> {
  const id = typeof doctor === 'number' ? doctor : doctor.doctorId;
  
  return this.http.delete<Doctor>(`${this.serviceUrl}/${id}`, 
  this.httpOptions).pipe(
    catchError(this.handleError<Doctor>('deleteDoctor'))
  );
}

//PUT Doctor
public updateDoctor(doctor: Doctor): Observable<any> {
  return this.http.put(`${this.serviceUrl}/${doctor.doctorId}`, doctor,
   this.httpOptions).pipe(
    map(data => new Doctor().deserialize(data)),
    catchError(this.handleError<any>('updateDoctor'))
   )
}



  /**
   * The below is copied from hero stuff
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
