import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OpsRoomComponent } from './ops-room.component';

describe('OpsRoomComponent', () => {
  let component: OpsRoomComponent;
  let fixture: ComponentFixture<OpsRoomComponent>;

  beforeEach(async(() => {
    const matSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ OpsRoomComponent ],
      providers: [{ provide: MatSnackBar, useValue: matSnackBar }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
