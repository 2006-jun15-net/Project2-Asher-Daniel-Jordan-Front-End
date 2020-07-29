import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  private serviceUrl = 'https://localhost:44362/api/Patients';

  constructor(private http: HttpClient) { }
}
