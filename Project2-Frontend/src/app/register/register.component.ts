import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../shared/services/patient.service';
import { Patient } from '../shared/models/patient';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public patient: Patient | null = null;

  constructor(
    private Route: Router,
    private databasePatient: PatientService,
    ) { }

    patientZero: any = {
      patientId: 0,
      firstName: '',
      lastName: ''
    };


  ngOnInit(): void {
  }

  public addPatient(): void {
    this.databasePatient.addPatient({ firstName: this.patientZero.firstName, lastName: this.patientZero.lastName } as Patient)
    .subscribe(patient => this.patientZero = patient);
    setTimeout(() => {this.toLogin(); }, 1000);
  }

  public toLogin(): void {
    this.Route.navigate(['/login']);
  }

}
