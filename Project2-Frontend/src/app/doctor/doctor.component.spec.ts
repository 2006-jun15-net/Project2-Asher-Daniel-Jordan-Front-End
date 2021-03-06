import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { DoctorComponent } from './doctor.component';

describe('DoctorComponent', () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ DoctorComponent ],
  //     imports: [HttpClientTestingModule]
  //   })
  //   .compileComponents();
  // }));

 // Mock localStorage
//  beforeEach(() => {
//   var store = {};

//   spyOn(localStorage, 'getItem').and.callFake( (key:string):String => {
//     return store[key] || null;
//   });
//   spyOn(localStorage, 'removeItem').and.callFake((key:string):void =>  {
//     delete store[key];
//   });
//   spyOn(localStorage, 'setItem').and.callFake((key:string, value:string):string =>  {
//     return store[key] = <string>value;
//   });
//   spyOn(localStorage, 'clear').and.callFake(() =>  {
//       store = {};
//   });
// });




  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // let store: any = {};
    // const mockLocalStorage = {
    //   getItem: (key: string): string => {
    //     return key in store ? store[key] : null;
    //   },
    //   setItem: (key: string, value: string) => {
    //     store[key] = `${value}`;
    //   },
    //   removeItem: (key: string) => {
    //     delete store[key];
    //   },
    //   clear: () => {
    //     store = {};
    //   }
    // };
    // spyOn(localStorage, 'getItem')
    //   .and.callFake(mockLocalStorage.getItem);
    // spyOn(localStorage, 'setItem')
    //   .and.callFake(mockLocalStorage.setItem);
    // spyOn(localStorage, 'removeItem')
    //   .and.callFake(mockLocalStorage.removeItem);
    // spyOn(localStorage, 'clear')
    //   .and.callFake(mockLocalStorage.clear);
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
