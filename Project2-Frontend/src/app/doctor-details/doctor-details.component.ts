import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Doctor } from '../shared/models/doctor';
import { DoctorService } from '../shared/services/doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  @Input() doctor: any;
  id1: string;

  constructor(
    private databaseDoctor: DoctorService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.id1 = this.route.snapshot.params.id;
   }

  ngOnInit(): void {
    this.getDoctor();
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

}
