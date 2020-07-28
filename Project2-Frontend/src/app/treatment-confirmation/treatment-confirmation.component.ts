import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../shared/services/treatment.service';
import { TreatmentDetailsService } from '../shared/services/treatment-details.service'
import {Treatment} from '../shared/models/treatment';
import { TreatmentDetails } from '../shared/models/treatmentDetails'
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private databaseTreatment: TreatmentService,
    private databaseTreamentDetails: TreatmentDetailsService, 
    private route: ActivatedRoute,
    private readonly snackBar: MatSnackBar,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTreatmentInfo();
  }

  public getTreatmentInfo() {
    const treatmentId = +this.route.snapshot.paramMap.get('treatmentId')!;
    this.databaseTreatment.getTreatmentInfo(treatmentId)
    .subscribe(treatment => this.treatment = treatment);
  }

  goBack(): void {
    this.location.back();
  }

  confirmTreatment(): void {
    this.treatmentDetails!.opsRoomId = null;
    this.treatmentDetails!.treatmentId = this.treatment?.treatmentId;
    this.treatmentDetails!.patientId = +this.route.snapshot.paramMap.get('patientId')!;
    this.databaseTreamentDetails.createTreatmentDetail(this.treatmentDetails!)
    .catch(error => this.handleHTTPError(error));
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
