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
import { FindPatientComponent } from './findPatient/findPatient.component';
import { TreatmentConfirmationComponent } from './treatment-confirmation/treatment-confirmation.component';
import { OpsRoomComponent } from './ops-room/ops-room.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import { BookOpsRoomComponent } from './book-ops-room/book-ops-room.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    TreatmentComponent,
    FindPatientComponent,
    TreatmentConfirmationComponent,
    OpsRoomComponent,
    BookOpsRoomComponent
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
  ],
  providers: [AppService, TreatmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
