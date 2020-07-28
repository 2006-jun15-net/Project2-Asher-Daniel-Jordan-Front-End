import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsRoomComponent } from './ops-room.component';

describe('OpsRoomComponent', () => {
  let component: OpsRoomComponent;
  let fixture: ComponentFixture<OpsRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpsRoomComponent ]
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
