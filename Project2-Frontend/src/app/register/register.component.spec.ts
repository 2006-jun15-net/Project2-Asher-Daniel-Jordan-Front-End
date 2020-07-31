import 'jasmine';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
<<<<<<< HEAD
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
=======
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
>>>>>>> 5857277c7424987060f0a331a6f5b0944fd0a3b1

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
<<<<<<< HEAD
      imports: [ 
        HttpClientTestingModule,
        RouterTestingModule,
      ]
=======
      imports: [RouterTestingModule, HttpClientTestingModule]
>>>>>>> 5857277c7424987060f0a331a6f5b0944fd0a3b1
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
