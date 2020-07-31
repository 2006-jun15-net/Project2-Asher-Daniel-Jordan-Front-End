import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../shared/models/patient';
import { PatientService } from '../shared/services/patient.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { TreatmentDetailsService } from '../shared/services/treatment-details.service';
import { TreatmentDetails } from '../shared/models/treatmentDetails';
import { TreatmentService } from '../shared/services/treatment.service';
import {Treatment} from '../shared/models/treatment';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  @Input() patient: any;
  public treatmentDetails: TreatmentDetails[] | null = null;


  id2: string;
  public pat = localStorage.getItem('patient');


  constructor(
  private pService: PatientService,
  private tdService: TreatmentDetailsService,
  private route: ActivatedRoute,
  private location: Location
  ) {
    this.id2 = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getPatient();
    this.getTreatmentDetails();
  }

  getPatient(): void {
      const id = parseInt(this.id2, 10);
      this.pService.getPatient(id)
        .subscribe(patient => this.patient = patient);
  }

  getTreatmentDetails(): void {
    const id = parseInt(this.id2, 10);
    this.tdService.getPatientTreatment(id)
    .subscribe(td => this.treatmentDetails = td);
  }

  assignPatient(): void {
    const id = parseInt(this.id2, 10);
    this.pService.assignPatientToRoom(id)
      .subscribe(patient => this.patient = patient);

  }


  deletePatient(): void{
    const id = parseInt(this.id2, 10);
    this.pService.deletePatient({patientId: id} as Patient);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
