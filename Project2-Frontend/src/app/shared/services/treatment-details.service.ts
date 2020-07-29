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
  private readonly serviceUrl = environment.Url +'/api/TreatmentDetails';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) { }

  public getTreatmentDetail(roomId: number, patientId: number): Observable<TreatmentDetails> {
    return this.http.get<TreatmentDetails>(`${this.serviceUrl}/${roomId}/${patientId}`)
    .pipe(
      map(data => new TreatmentDetails().deserialize(data))
    );
  }

  public createTreatmentDetail(treatmentDetails: TreatmentDetails): Promise<TreatmentDetails> {
    return this.http.post<TreatmentDetails>(`${this.serviceUrl}`, treatmentDetails).toPromise();
  }
}
