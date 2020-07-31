import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private Route: Router) {
    this.pageLoad();
  }

  public doc = localStorage.getItem('doctor');
  public pat = localStorage.getItem('patient');
  public nur = localStorage.getItem('nurse');
  public adm = localStorage.getItem('admin');

  ngOnInit(): void {
  }


  public logout(): void {
    localStorage.removeItem('doctor');
    localStorage.removeItem('patient');
    localStorage.removeItem('nurse');
    localStorage.removeItem('admin');
    this.Route.navigate(['/login']);
  }


 public pageLoad(): void {
    if (this.doc == null && this.nur == null && this.pat == null && this.adm == null){
      this.Route.navigate(['/login']);
    }
  }



}
