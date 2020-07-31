import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { FindPatientComponent as FindPatientComponent } from './findPatient.component';

describe('FindPatientComponent', () => {
  let component: FindPatientComponent;
  let fixture: ComponentFixture<FindPatientComponent>;

  beforeEach(async(() => {
    const matSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
    TestBed.configureTestingModule({
      declarations: [ FindPatientComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, NgbNavModule, FormsModule],
      providers: [{ provide: MatSnackBar, useValue: matSnackBar }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPatientComponent);
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
