import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './shared/services/doctor.service';
import { TreatmentService } from './shared/services/treatment.service'
import { AppRoutingModule } from './app-routing.module';
import { DoctorComponent } from './doctor/doctor.component';
import { CommonModule } from '@angular/common';
import { TreatmentComponent } from './treatment/treatment.component';
import { PatientComponent } from './patient/patient.component';
import { TreatmentConfirmationComponent } from './treatment-confirmation/treatment-confirmation.component';
import { OpsRoomComponent } from './ops-room/ops-room.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    TreatmentComponent,
    PatientComponent,
    TreatmentConfirmationComponent,
    OpsRoomComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AppService, TreatmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
