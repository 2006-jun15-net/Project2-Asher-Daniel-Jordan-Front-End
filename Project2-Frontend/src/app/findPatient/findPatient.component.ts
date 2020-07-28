import { Component, OnInit } from '@angular/core';
import { FindPatientService } from '../shared/services/findPatient.service';
import { Patient } from '../shared/models/patient';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-find-patient',
  templateUrl: './findPatient.component.html',
  styleUrls: ['./findPatient.component.css']
})
export class FindPatientComponent implements OnInit {
  doctorId: number | null = null;
  patients: Patient[] | null = null;
  patient: Patient | null = null;
  roomId = 0;
  validRoom = true;
  errorMessage = '';
  active = 1;

  constructor(
    private databasePatient: FindPatientService,
    private readonly snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
      {
        this.doctorId = Number(params.get('doctorId'));
      }
    );
  }

  public getDoctorPatients(doctorId: number): void
  {
    this.databasePatient.getDocterPatients(doctorId)
    .subscribe(patients => this.patients = patients);
  }

  public getPatientByRoom(form: NgForm): void
  {
    if (form.valid && !isNaN(this.roomId)) {
    this.databasePatient.getPatientByRoom(this.roomId)
    .subscribe(patient => this.patient = patient,
      error => this.invalidRoom(error)
      );
    this.validRoom = true;
    }
    else {
      this.validRoom = false;
      this.errorMessage = 'You must enter an integer';
    }
  }

  private invalidRoom(error: HttpErrorResponse): void {
    this.patient = null;
    this.validRoom = false;
    this.errorMessage = 'No patient is in that room';
    this.handleHTTPError(error);
  }
  private handleHTTPError(error: HttpErrorResponse): void {
    console.log(error.status);
    let message: string;
    if (error.status === 0) {
      message = 'Unable to connect to server';
    } else {
      message = error.status.toString();
    }
    this.snackBar.open(message, 'Dismiss');
  }
}
