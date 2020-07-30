import { Component, OnInit } from '@angular/core';
import { TreatmentDetailsService } from '../shared/services/treatment-details.service';
import { TreatmentService } from '../shared/services/treatment.service';
import { OpsRoomService } from '../shared/services/ops-room.service';
import { TreatmentDetails } from '../shared/models/treatmentDetails';
import {Treatment} from '../shared/models/treatment';
import {OpsRoom} from '../shared/models/opsroom';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-treatment-details',
  templateUrl: './treatment-details.component.html',
  styleUrls: ['./treatment-details.component.css']
})
export class TreatmentDetailsComponent implements OnInit {

  constructor(
    private databaseTreamentDetails: TreatmentDetailsService,
    private databaseTreatment: TreatmentService,
    private databaseOpsRoom: OpsRoomService,
    private route: ActivatedRoute,
    private router: Router,
    private readonly snackBar: MatSnackBar,
    private location: Location,
    private fb: FormBuilder
  ) { }

  public patientId: number | undefined;
  public treatments: Treatment[] | undefined;
  public opsRooms: OpsRoom[] | undefined;
  public isSubmitted = false;

  detailsForm = this.fb.group({
    opsRoomId: [''],
    treatmentId: ['', [Validators.required]]
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
      {
        this.patientId = Number(params.get('patientId'));
      }
    );

    this.getTreatments();
    this.getRooms();
  }

  private getTreatments(): void {
    this.databaseTreatment.getTreatmentsByDoctor(1).subscribe(results => this.treatments = results,
      error => this.handleHTTPError(error));
  }

  private getRooms(): void {
    this.databaseOpsRoom.getAvailableRooms().subscribe(results => this.opsRooms = results,
      error => this.handleHTTPError(error));
  }

  // Choose treatment using select dropdown
  changeTreatment(e: Event): void {
    this.detailsForm.controls.treatmentId.setValue(parseInt((e.target as HTMLSelectElement).value, 10));
  }

  // Choose opsRoom using select dropdown
  changeOpsRoom(e: Event): void {
    if ((e.target as HTMLSelectElement).value === 'null')
    {
      this.detailsForm.controls.opsRoomId.setValue(null);
    }
    else
    {
      this.detailsForm.controls.opsRoomId.setValue(parseInt((e.target as HTMLSelectElement).value, 10));
    }
  }

  get f(): any {
    return this.detailsForm.controls;
  }

  submit(): void {
    this.databaseTreamentDetails.createTreatmentDetail(
      {
        treatmentDetailsId: 0,
        opsRoomId: this.detailsForm.controls.opsRoomId.value,
        treatmentId: this.detailsForm.controls.treatmentId.value,
        patientId: 3,
        startTime: 'dummyData'
      } as TreatmentDetails
    )
    .subscribe(data =>
      {
        console.log('TreatmentDetail successfully created');
        if (this.detailsForm.controls.opsRoomId.value != null)
        {
          this.databaseOpsRoom.updateRoom(
            {
              opsRoomId: this.detailsForm.controls.opsRoomId.value,
              available: false
            } as OpsRoom)
            .subscribe(opsData => console.log('OpsRoom Successfully updated'),
            error => this.handleHTTPError(error));
        }
      }, error => this.handleHTTPError(error));
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
