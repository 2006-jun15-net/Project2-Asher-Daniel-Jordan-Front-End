import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from '../shared/services/patient-service.service';
import { Patient } from '../shared/models/patient';

@Component({
  selector: 'app-assign-patient',
  templateUrl: './assign-patient.component.html',
  styleUrls: ['./assign-patient.component.css']
})
export class AssignPatientComponent implements OnInit {

  patients: Patient[] | null = null;

  constructor(private pService: PatientServiceService) { }

  ngOnInit(): void {
  }

}
