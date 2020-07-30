import { Component, OnInit } from '@angular/core';
import { PatientService } from '../shared/services/patient.service';
import {Patient} from '../shared/models/patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {





  constructor(private pService: PatientService) { }

  patients: Patient[] | null = null;
  public patientid: number | null = null;
  public patient: Patient | null = null;
  public error: string | null = null;

  public doc = localStorage.getItem('doctor');

  ngOnInit(): void {
    this.getPatients();
  }

  public getPatients(): void {
    this.pService.getPatients()
    .subscribe(patients => this.patients = patients);
  }





}
