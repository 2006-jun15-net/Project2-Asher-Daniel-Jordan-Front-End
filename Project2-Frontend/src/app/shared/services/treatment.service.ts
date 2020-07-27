import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Treatment } from '../models/treatment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  private serviceUrl = 'https://localhost:44362/api/Treatments';
  //private serviceUrl = 'https://project2-hospital-frontend.azurewebsites.net/api/Treatments';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  }

  constructor(private http: HttpClient) { }

  public getTreatments(): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(`${this.serviceUrl}`)
    .pipe(
      map(data => data.map(data => new Treatment().deserialize(data),
      catchError(() => this.handleError<Treatment>(`get`))
      ))
    );
  }

  // GET all treatments by illness
  
  public getTreatmentsByIllness(doctorId: number, illnessId: number): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(`${this.serviceUrl}/GetByIllness/${doctorId}/${illnessId}`)
    .pipe(
      map(data => data.map(data => new Treatment().deserialize(data),
      catchError(() => this.handleError<Treatment>(`Illness id =${illnessId}, Doctor id =${doctorId}`))
      ))
    );
  }

  public getTreatmentInfo(doctorId: number, illnessId: number): Observable<Treatment> {
    return this.http.get<Treatment>(`${this.serviceUrl}/${doctorId}/${illnessId}`)
    .pipe(
      map(data => new Treatment().deserialize(data),
      catchError(() => this.handleError<Treatment>(`getTreatmentInfo`))
      )
    );
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
