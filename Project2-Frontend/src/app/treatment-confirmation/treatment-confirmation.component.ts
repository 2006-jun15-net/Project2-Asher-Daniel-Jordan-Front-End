import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../shared/services/treatment.service';
import {Treatment} from '../shared/models/treatment';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-treatment-confirmation',
  templateUrl: './treatment-confirmation.component.html',
  styleUrls: ['./treatment-confirmation.component.css']
})
export class TreatmentConfirmationComponent implements OnInit {
  public treatment: Treatment | null = null;

  constructor(
    private databaseTreatment: TreatmentService, 
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTreatmentInfo();
  }

  public getTreatmentInfo() {
    const doctorId = +this.route.snapshot.paramMap.get('doctorId')!;
    const illnessId = +this.route.snapshot.paramMap.get('illnessId')!;
    this.databaseTreatment.getTreatmentInfo(doctorId, illnessId)
    .subscribe(treatment => this.treatment = treatment);
  }

  goBack(): void {
    this.location.back();
  }
}
