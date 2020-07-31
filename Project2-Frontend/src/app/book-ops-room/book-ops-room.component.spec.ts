import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BookOpsRoomComponent } from './book-ops-room.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { OpsRoomService } from '../shared/services/ops-room.service';


describe('BookOpsRoomComponent', () => {
  let component: BookOpsRoomComponent;
  let fixture: ComponentFixture<BookOpsRoomComponent>;

  beforeEach(async(() => {
    const matSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      declarations: [ BookOpsRoomComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: MatSnackBar, useValue: matSnackBar }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOpsRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should call service function updateRoom', () => {
  //   // const mySpy = spyOn(databaseOpsRoom, 'updateRoom');
  // });
});
