import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorService } from './shared/services/doctor.service';
import { TreatmentService } from './shared/services/treatment.service';
import { AppRoutingModule } from './app-routing.module';
import { DoctorComponent } from './doctor/doctor.component';
import { CommonModule } from '@angular/common';
import { TreatmentComponent } from './treatment/treatment.component';
import { FindPatientComponent } from './findPatient/findPatient.component';
import { TreatmentConfirmationComponent } from './treatment-confirmation/treatment-confirmation.component';
import { OpsRoomComponent } from './ops-room/ops-room.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgbNavModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BookOpsRoomComponent } from './book-ops-room/book-ops-room.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssignPatientComponent } from './assign-patient/assign-patient.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DashboardComponent,
    TreatmentComponent,
    FindPatientComponent,
    TreatmentConfirmationComponent,
    OpsRoomComponent,
    BookOpsRoomComponent,
    DashboardComponent,
    AssignPatientComponent,
    DoctorDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgbNavModule,
    NgbModule,
  ],
  providers: [DoctorService, TreatmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
