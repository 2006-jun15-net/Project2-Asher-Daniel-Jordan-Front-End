import { Component, OnInit } from '@angular/core';
import { PatientService } from '../shared/services/patient.service';
import {Patient} from '../shared/models/patient'

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Patient[] | null = null;

  constructor(private pService: PatientService) { }

  ngOnInit(): void {
  }

}
