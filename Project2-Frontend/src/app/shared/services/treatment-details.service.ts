import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { TreatmentDetails } from '../models/treatmentDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentDetailsService {
  private readonly serviceUrl = environment.Url + '/api/TreatmentDetails';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) { }

  public getTreatmentDetail(id: number): Observable<TreatmentDetails> {
    return this.http.get<TreatmentDetails>(`${this.serviceUrl}/${id}`)
    .pipe(
      map(data => new TreatmentDetails().deserialize(data))
    );
  }

  public createTreatmentDetail(treatmentDetails: TreatmentDetails): Observable<TreatmentDetails> {
    return this.http.post<TreatmentDetails>(`${this.serviceUrl}`, treatmentDetails)
    .pipe(
      map(data2 => new TreatmentDetails().deserialize(data2))
    );
  }

  public getDoctorTreatmentDetails(doctorId: number): Observable<TreatmentDetails[]> {
    return this.http.get<TreatmentDetails[]>(`${this.serviceUrl}/Doctor/${doctorId}`)
    .pipe(
      map(data => data.map(itemData => new TreatmentDetails().deserialize(itemData)))
    );
  }

  public getPatientTreatment(patientId: number): Observable<TreatmentDetails> {
    return this.http.get<TreatmentDetails>(`${this.serviceUrl}/GetPatientsTreatment/${patientId}`)
    .pipe(
      map(data => new TreatmentDetails().deserialize(data))
    );
  }

  public getSinglePatientTreatment(patientId: number): Observable<TreatmentDetails> {
    return this.http.get<TreatmentDetails>(`${this.serviceUrl}/GetSinglePatientsTreatment/${patientId}`)
    .pipe(
      map(data2 => new TreatmentDetails().deserialize(data2))
      );
  }

  public updateTreatmentDetail(treatmentDetail: TreatmentDetails): Observable<TreatmentDetails> {
      return this.http.put<TreatmentDetails>
      (`${this.serviceUrl}/${treatmentDetail.treatmentDetailsId}`, treatmentDetail);
  }
}
