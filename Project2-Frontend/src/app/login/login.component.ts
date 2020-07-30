import { Component, OnInit } from '@angular/core';
import { Doctor } from '../shared/models/doctor';
import { Nurse } from '../shared/models/nurse';
import { Patient } from '../shared/models/patient';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public doctor: Doctor | null = null;
  public nurse: Nurse | null = null;
  public patient: Patient | null = null;
  public userId: number | null = null;
  public access: string | null = null;

  public doc = localStorage.getItem('doctor');
  public pat = localStorage.getItem('patient');
  public nur = localStorage.getItem('nurse');
  public adm = localStorage.getItem('admin');

  constructor(private Route: Router) { }

  ngOnInit(): void {
    this.pageLoad();
  }

  public login(): void {
    if ( this.access === 'doctor'){
      localStorage.setItem('doctor', `${this.userId}`);
      this.Route.navigate([`/details/${this.userId}`]);
    }
    if ( this.access === 'patient'){
      localStorage.setItem('patient', `${this.userId}`);
    }
    if ( this.access === 'nurse'){
      localStorage.setItem('nurse', `${this.userId}`);
    }
    if ( this.access === 'admin'){
      localStorage.setItem('admin', `${this.userId}`);
      this.Route.navigate(['/dashboard']);
    }
    this.pageLoad();

  }

  public pageLoad(): void {
    if (this.doc != null ){
      this.Route.navigate([`/details/${this.doc}`]);
    }
    if (this.nur != null ){

    }
    if (this.pat != null ){

    }
    if (this.adm != null ){
      this.Route.navigate(['/dashboard']);
    }
  }







}
