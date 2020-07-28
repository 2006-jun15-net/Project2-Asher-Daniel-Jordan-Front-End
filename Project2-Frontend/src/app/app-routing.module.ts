import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentComponent } from './treatment/treatment.component';
import { FindPatientComponent } from './findPatient/findPatient.component';
import { TreatmentConfirmationComponent } from './treatment-confirmation/treatment-confirmation.component';

const routes: Routes =[
  { path: 'FindPatients', component: FindPatientComponent},
  { path: 'Treatments/:doctorId/:illnessId', component: TreatmentComponent},
  { path: 'TreatmentConfirm/:doctorId/:illnessId', component: TreatmentConfirmationComponent}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
