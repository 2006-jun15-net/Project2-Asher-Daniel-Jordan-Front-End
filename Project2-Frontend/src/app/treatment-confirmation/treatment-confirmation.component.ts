import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../shared/services/treatment.service';
import { TreatmentDetailsService } from '../shared/services/treatment-details.service';
import {Treatment} from '../shared/models/treatment';
import { TreatmentDetails } from '../shared/models/treatmentDetails';
import { Observable } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-treatment-confirmation',
  templateUrl: './treatment-confirmation.component.html',
  styleUrls: ['./treatment-confirmation.component.css']
})
export class TreatmentConfirmationComponent implements OnInit {
  public treatment: Treatment | null = null;
  public treatmentDetails: TreatmentDetails = new TreatmentDetails();
  public treatmentId: number | undefined;
  public patientId: number | undefined;
  public doctorId: number | undefined;

  td: any = {
    opsRoomId: null,
    treatmentId: 0,
    patientId: 0,
    startTime: ''
  };

  constructor(
    private databaseTreatment: TreatmentService,
    private databaseTreamentDetails: TreatmentDetailsService,
    private route: ActivatedRoute,
    private router: Router,
    private readonly snackBar: MatSnackBar,
    private location: Location
  ) { }

  public doc = localStorage.getItem('doctor');

  ngOnInit(): void {
    if (this.doc == null){
      this.router.navigate(['/login']);
    }
    this.route.paramMap.subscribe(params =>
      {
        this.treatmentId = Number(params.get('treatmentId'));
        this.patientId = Number(params.get('patientId'));
        this.doctorId = Number(params.get('doctorId'));
      }
    );
    this.getTreatmentInfo();
  }

  public getTreatmentInfo(): void {
    this.databaseTreatment.getTreatmentInfo(Number(this.treatmentId))
    .subscribe(treatment => this.treatment = treatment);
  }

  goBack(): void {
    this.location.back();
  }

  confirmTreatment(): void {
    this.databaseTreamentDetails.createTreatmentDetail(
      {
        treatmentDetailsId: 0,
        opsRoomId: null,
        treatmentId: this.treatmentId,
        patientId: this.patientId,
        startTime: 'dummyData'
      } as TreatmentDetails
    )
    .subscribe(data => console.log('TreatmentDetail successfully created'),
    error => this.handleHTTPError(error));
    this.goBackToFindPatients();
  }

  private goBackToFindPatients(): void {
    this.router.navigate([`FindPatients/${this.doctorId}`]);
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
