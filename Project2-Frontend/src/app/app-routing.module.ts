import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentComponent } from './treatment/treatment.component';
import { FindPatientComponent } from './findPatient/findPatient.component';
import { TreatmentConfirmationComponent } from './treatment-confirmation/treatment-confirmation.component';
import { OpsRoomComponent } from './ops-room/ops-room.component';
import { BookOpsRoomComponent } from './book-ops-room/book-ops-room.component';
import { HttpClientModule} from '@angular/common/http';
import { DoctorComponent } from './doctor/doctor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { PatientComponent } from './patient/patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { LoginComponent } from './login/login.component';
import { TreatmentDetailsComponent } from './treatment-details/treatment-details.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'treatment-details/:id', component: TreatmentDetailsComponent },
  { path: 'details/:id', component: DoctorDetailsComponent},
  { path: 'doctor', component: DoctorComponent},
  { path: 'FindPatients/:doctorId', component: FindPatientComponent},
  { path: 'FindPatients/:doctorId/Treatments/:patientId', component: TreatmentComponent},
  { path: 'TreatmentConfirm/:treatmentId/:patientId', component: TreatmentConfirmationComponent},
  { path: 'FindPatients/:doctorId/:patientId/OpsRoom', component: OpsRoomComponent},
  { path: 'FindPatients/:doctorId/:patientId/OpsRoom/BookOpsRoom/:opsRoomId', component: BookOpsRoomComponent},
  { path: 'patient', component: PatientComponent },
  { path: 'patient-details/:id', component: PatientDetailsComponent }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
