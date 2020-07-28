import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentComponent } from './treatment/treatment.component';
import { FindPatientComponent } from './findPatient/findPatient.component';
import { TreatmentConfirmationComponent } from './treatment-confirmation/treatment-confirmation.component';
import { OpsRoomComponent } from './ops-room/ops-room.component';
import { BookOpsRoomComponent } from './book-ops-room/book-ops-room.component';
import { HttpClientModule} from '@angular/common/http';

const routes: Routes =[
  { path: 'FindPatients/:doctorId', component: FindPatientComponent},
  { path: 'FindPatients/:doctorId/Treatments/:doctorId/:patientId', component: TreatmentComponent},
  { path: 'TreatmentConfirm/:treatmentId/:patientId', component: TreatmentConfirmationComponent},
  { path: 'FindPatients/:doctorId/OpsRoom', component: OpsRoomComponent},
  { path: 'FindPatients/:doctorId/OpsRoom/BookOpsRoom/:opsRoomId', component: BookOpsRoomComponent}
]



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
