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

  constructor(private databaseTreatment: TreatmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTreatments();
  }

  public getTreatmentsList() {
    this.databaseTreatment.getTreatments()
    .subscribe(treatments => this.treatments = treatments);
  }

  
  public getTreatments() {
    const doctorId = +this.route.snapshot.paramMap.get('doctorId')!;
    const illnessId = +this.route.snapshot.paramMap.get('illnessId')!;
    this.databaseTreatment.getTreatmentsByIllness(doctorId, illnessId)
    .subscribe(treatments => this.treatments = treatments);
  }
}
