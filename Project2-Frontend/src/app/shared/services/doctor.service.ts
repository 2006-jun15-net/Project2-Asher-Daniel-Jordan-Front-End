import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Doctor } from '../models/doctor';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private serviceUrl = 'https://localhost:44362';
  //private serviceUrl = 'https://project2-hospital.azurewebsites.net/';

  constructor(private http: HttpClient) {  }


// grap data from backend:
//get all doctors
public getDoctors(): Observable<Doctor[]> {
  return this.http.get<Doctor[]>(`${this.serviceUrl}/api/Doctors`)
  .pipe(
    map(data => data.map(data => new Doctor().deserialize(data)))
  );
}

//get doctor by id
public getDoctor(id: number): Observable<Doctor> {
  return this.http.get<Doctor>(`${this.serviceUrl}/api/Doctors/${id}`).pipe(
    map(data => new Doctor().deserialize(data),
    catchError(() => this.handleError('User not found'))
  ));
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
