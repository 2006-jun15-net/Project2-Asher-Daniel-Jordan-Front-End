import { Component, OnInit } from '@angular/core';
import { OpsRoomService } from '../shared/services/ops-room.service';
import { OpsRoom } from '../shared/models/opsroom';
import { TreatmentDetailsService } from '../shared/services/treatment-details.service';
import { TreatmentDetails } from '../shared/models/treatmentDetails';
import { Observable } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-ops-room',
  templateUrl: './book-ops-room.component.html',
  styleUrls: ['./book-ops-room.component.css']
})
export class BookOpsRoomComponent implements OnInit {
  // opsRoom: OpsRoom = new OpsRoom();
  opsRoomId: any;
  patientId: any;
  doctorId: any;

  constructor(
    private databaseOpsRoom: OpsRoomService,
    private databaseTreatmentDetails: TreatmentDetailsService,
    private route: ActivatedRoute,
    private router: Router,
    private readonly snackBar: MatSnackBar,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
      {
        // this.opsRoom.opsRoomId = Number(params.get('opsRoomId'));
        this.opsRoomId = Number(params.get('opsRoomId'));
        this.patientId = Number(params.get('patientId'));
        this.doctorId = Number(params.get('doctorId'));
      });
  }

  goBack(): void {
    this.location.back();
  }

  confirm(): void {
    this.databaseOpsRoom.updateRoom({opsRoomId: this.opsRoomId, available: false} as OpsRoom)
    .subscribe( data => console.log('OpsRoom PUT was successful', data),
    error => this.handleHTTPError(error)
    );

    this.updatePatientTreatmentDetails();
  }

  private updatePatientTreatmentDetails(): void {
    this.databaseTreatmentDetails.getPatientTreatment(Number(this.patientId))
    .subscribe(treatment => {
      treatment.opsRoomId = Number(this.opsRoomId);
      this.databaseTreatmentDetails.updateTreatmentDetail(treatment as TreatmentDetails)
        .subscribe(data => console.log('TreatmentDetails PUT was successful', data),
          error => this.handleHTTPError(error));
    }, error => this.handleHTTPError(error));

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
