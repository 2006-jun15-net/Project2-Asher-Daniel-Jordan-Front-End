import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BookOpsRoomComponent } from './book-ops-room.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


describe('BookOpsRoomComponent', () => {
  let component: BookOpsRoomComponent;
  let fixture: ComponentFixture<BookOpsRoomComponent>;
  // const activatedRouteMock = {
  //   queryParams: of({
  //     opsRoomId: '5',
  //     patientId: '1',
  //     doctorId: '3'
  //   }),
  // };

  beforeEach(async(() => {
    const matSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      declarations: [ BookOpsRoomComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: MatSnackBar, useValue: matSnackBar },
        // { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOpsRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be defined', () => {
  //   expect(component).toBeDefined();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
