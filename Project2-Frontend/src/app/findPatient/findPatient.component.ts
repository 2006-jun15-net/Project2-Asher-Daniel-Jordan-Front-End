import { Component, OnInit } from '@angular/core';
import { FindPatientService } from '../shared/services/findPatient.service'
import { Patient } from '../shared/models/patient'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-findPatient',
  templateUrl: './findPatient.component.html',
  styleUrls: ['./findPatient.component.css']
})
export class FindPatientComponent implements OnInit {
  patients: Patient[] | null = null;
  patient: Patient | null = null;
  roomId: number = 0;
  validRoom: boolean = true;
  errorMessage: string = "";
  active = 1;

  constructor(private databasePatient: FindPatientService, private readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public getDoctorPatients(doctorId: number)
  {
    this.databasePatient.getDocterPatients(doctorId)
    .subscribe(patients => this.patients = patients);
  }

  public getPatientByRoom(form: NgForm)
  {
    debugger;
    if (form.valid && !isNaN(this.roomId)) {
    this.databasePatient.getPatientByRoom(this.roomId)
    .subscribe(patient => this.patient = patient,
      error => this.invalidRoom(error)
      );
      this.validRoom = true;
    }
    else {
      this.validRoom = false;
      this.errorMessage = "You must enter an integer";
    }
  }

  private invalidRoom(error: HttpErrorResponse): void {
    this.patient = null;
    this.validRoom = false;
    this.errorMessage = "No patient is in that room";
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
