import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentConfirmationComponent } from './treatment-confirmation.component';

describe('TreatmentConfirmationComponent', () => {
  let component: TreatmentConfirmationComponent;
  let fixture: ComponentFixture<TreatmentConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
