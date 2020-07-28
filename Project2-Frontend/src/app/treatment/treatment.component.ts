import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../shared/services/treatment.service';
import {Treatment} from '../shared/models/treatment';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {
  public treatments: Treatment[] | null = null;
  public patientId: number | undefined;
  public doctorId: number | undefined;

  constructor(private databaseTreatment: TreatmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
      {
        this.patientId = Number(params.get('patientId'));
        this.doctorId = Number(params.get('doctorId'));
      }
    );
    this.getTreatments();
  }

  public getTreatmentsList(): void {
    this.databaseTreatment.getTreatments()
    .subscribe(treatments => this.treatments = treatments);
  }


  public getTreatments(): void {
    this.databaseTreatment.getTreatmentsByDoctor(Number(this.doctorId))
    .subscribe(treatments => this.treatments = treatments);
  }
}
