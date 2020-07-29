import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Doctor } from '../shared/models/doctor';
import { DoctorService } from '../shared/services/doctor.service';
import { TreatmentService } from '../shared/services/treatment.service';
import { Treatment } from '../shared/models/treatment';
import { TreatmentDetails } from '../shared/models/treatmentDetails';
import { TreatmentDetailsService } from '../shared/services/treatment-details.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  @Input() doctor: any;
  id1: string;
  public treatments: Treatment[] | null = null;
  public treatmentDetails: TreatmentDetails[] | null = null;

  constructor(
    private databaseDoctor: DoctorService,
    private databaseTreatment: TreatmentService,
    private databaseTreatmentDetails: TreatmentDetailsService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.id1 = this.route.snapshot.params.id;
   }

  ngOnInit(): void {
    this.getDoctor();
    this.getTreatments();
    this.getTreatmentHistory();
  }

  getTreatmentHistory(): void {
    const id = parseInt(this.id1, 10);
    this.databaseTreatmentDetails.getDoctorTreatmentDetails(id)
      .subscribe(treatmentDetails => this.treatmentDetails = treatmentDetails);
  }


  getDoctor(): void {
    const id = parseInt(this.id1, 10);
    this.databaseDoctor.getDoctor(id)
      .subscribe(doctor => this.doctor = doctor);
  }

  goBack(): void {
    this.location.back();
  }

  public editDoctor(): void {
    this.databaseDoctor.updateDoctor({ doctorId: this.doctor.doctorId,
    firstName: this.doctor.firstName,
    lastName: this.doctor.lastName } as Doctor)
      .subscribe(() => this.goBack());
  }

  public getTreatments(): void {
    const id = parseInt(this.id1, 10);
    this.databaseTreatment.getTreatmentsByDoctor(id)
    .subscribe(treatments => this.treatments = treatments);
  }

}
