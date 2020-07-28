import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOpsRoomComponent } from './book-ops-room.component';

describe('BookOpsRoomComponent', () => {
  let component: BookOpsRoomComponent;
  let fixture: ComponentFixture<BookOpsRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOpsRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOpsRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
