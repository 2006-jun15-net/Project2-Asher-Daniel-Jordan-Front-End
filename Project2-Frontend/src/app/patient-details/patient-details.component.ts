import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../shared/models/patient';
import { PatientService } from '../shared/services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { TreatmentDetailsService } from '../shared/services/treatment-details.service';
import { TreatmentDetails } from '../shared/models/treatmentDetails';
import { TreatmentService } from '../shared/services/treatment.service';
import {Treatment} from '../shared/models/treatment'

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  @Input()  patient: Patient | any ;
  @Input() treatmentDetails: TreatmentDetails | any;
  @Input() treatment: Treatment | any ;
    

  constructor
  (private pService: PatientService, 
    private tdService: TreatmentDetailsService, 
    private tService: TreatmentService, 
    private route: ActivatedRoute) { 

      
     
      
    }

  ngOnInit(): void {

    debugger;
    this.getPatient();
    this.getTreatmentDetails();
    this.getTreatment();
  }

  getPatient():void {
  
      const id = Number(this.route.snapshot.paramMap.get('id'));
    

    
    this.pService.getPatient(id)
    .subscribe(patient => this.patient = patient);
  }

  getTreatmentDetails(): void {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tdService.getPatientTreatment(id)
    .subscribe(td => this.treatmentDetails = td);


  }

  getTreatment(): void {
    const id = Number(this.treatmentDetails.treatmentId);
    this.tService.getTreatmentInfo(id)
    .subscribe(t => this.treatment = t);
  }

  deletePatient(): void{

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.pService.deletePatient(id);
  }

}
