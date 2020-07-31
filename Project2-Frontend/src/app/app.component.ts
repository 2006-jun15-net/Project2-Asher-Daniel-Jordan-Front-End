import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project2-Frontend';

  constructor(private Route: Router){
    this.pageLoad();
  }

  public doc = localStorage.getItem('doctor');
  public pat = localStorage.getItem('patient');
  public nur = localStorage.getItem('nurse');
  public adm = localStorage.getItem('admin');

  public pageLoad(): void {
    if (this.doc == null && this.nur == null && this.pat == null && this.adm == null){
      this.Route.navigate(['/login']);
    }
  }


}
