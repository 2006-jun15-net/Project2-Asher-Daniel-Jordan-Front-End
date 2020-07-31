import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OpsRoomComponent } from './ops-room.component';

describe('OpsRoomComponent', () => {
  let component: OpsRoomComponent;
  let fixture: ComponentFixture<OpsRoomComponent>;

  // beforeEach(async(() => {
  //   const matSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
  //   TestBed.configureTestingModule({
  //     imports: [HttpClientTestingModule, RouterTestingModule],
  //     declarations: [ OpsRoomComponent ],
  //     providers: [{ provide: MatSnackBar, useValue: matSnackBar }]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {
    const matSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ OpsRoomComponent ],
      providers: [{ provide: MatSnackBar, useValue: matSnackBar }]
    })
    .compileComponents();
    fixture = TestBed.createComponent(OpsRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
