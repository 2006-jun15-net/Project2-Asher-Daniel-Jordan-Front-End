import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../shared/services/treatment.service';
import {Treatment} from '../shared/models/treatment';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {
  public treatments: Treatment[] | null = null;
  constructor(private databaseTreatment: TreatmentService) { }

  ngOnInit(): void {
  }

  public getTreatmentsList() {
    this.databaseTreatment.getTreatments()
    .subscribe(treatments => this.treatments = treatments);
  }

  public getTreatments(id: number) {
    this.databaseTreatment.getTreatmentsByIllness(id)
    .subscribe(treatments => this.treatments = treatments);
  }
}
