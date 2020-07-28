import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../shared/services/doctor.service';
import {Doctor} from '../shared/models/doctor';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  public doctorid: number | null = null;
  public doctor: Doctor | null = null;
  public doctors: Doctor[] | null = null;
  public error: string | null = null;

  constructor(private databaseDoctor: DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  public getDoctors() {
    this.databaseDoctor.getDoctors()
    .subscribe(doctors => this.doctors = doctors);
  }

  public getDoctor(id: number) {
    this.databaseDoctor.getDoctor(id)
    .subscribe(doctor => this.doctor = doctor);
  }
  

}
