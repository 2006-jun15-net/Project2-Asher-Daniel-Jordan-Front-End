import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientComponent } from './patient.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PatientComponent', () => {
  let component: PatientComponent;
  let fixture: ComponentFixture<PatientComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ PatientComponent ],
  //     imports: [HttpClientTestingModule]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PatientComponent);
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
