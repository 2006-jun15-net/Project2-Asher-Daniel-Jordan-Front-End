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

  doc: any = {
    doctorId: 0,
    firstName: '',
    lastName: ''
  };

  selectedDoc: any = {
    doctorId: 0,
    firstName: '',
    lastName: ''
  };

  constructor(private databaseDoctor: DoctorService) { }

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
  }

  public editDoctor(): void {
    this.databaseDoctor.updateDoctor(
      { 
        doctorId: this.selectedDoc.doctorId, 
        firstName: this.selectedDoc.firstName, 
        lastName: this.selectedDoc.lastName 
      } as Doctor)
    .subscribe(doctor => this.doctor = doctor);
  }

  public deleteDoctor(doctor: Doctor): void {
    this.databaseDoctor.deleteDoctor({ doctorId: doctor.doctorId, firstName: doctor.firstName, lastName: doctor.lastName } as Doctor)
    .subscribe();
  }
}
