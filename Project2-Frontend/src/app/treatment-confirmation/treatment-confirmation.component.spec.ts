import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TreatmentConfirmationComponent } from './treatment-confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TreatmentConfirmationComponent', () => {
  let component: TreatmentConfirmationComponent;
  let fixture: ComponentFixture<TreatmentConfirmationComponent>;

  beforeEach(async(() => {
    const matSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
    TestBed.configureTestingModule({
      declarations: [ TreatmentConfirmationComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: MatSnackBar, useValue: matSnackBar }, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
