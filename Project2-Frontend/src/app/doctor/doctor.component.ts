import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../shared/services/doctor.service';
import {Doctor} from '../shared/models/doctor';
import { delay } from 'rxjs/operators';



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

  doc: any = {
    doctorId: 0,
    firstName: '',
    lastName: ''
  };


  constructor(
    private databaseDoctor: DoctorService,
    ) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  public getDoctors(): void {
    this.databaseDoctor.getDoctors()
    .subscribe(doctors => this.doctors = doctors);
  }

  public getDoctor(id: number): void {
    this.databaseDoctor.getDoctor(id)
    .subscribe(doctor => this.doctor = doctor);
  }

  public addDoctor(): void {
    this.databaseDoctor.addDoctor({ firstName: this.doc.firstName, lastName: this.doc.lastName } as Doctor)
    .subscribe(doctor => this.doctor = doctor);
    setTimeout(() => {this.getDoctors(); }, 1000);
  }

  public deleteDoctor(id: any): void {
    this.databaseDoctor.deleteDoctor({ doctorId: parseInt(id, 10)} as Doctor)
    .subscribe();
    setTimeout(() => {this.getDoctors(); }, 1000);
  }
}
