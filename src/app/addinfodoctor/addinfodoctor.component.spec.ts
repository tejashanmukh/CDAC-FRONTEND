import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinfodoctorComponent } from './addinfodoctor.component';

describe('AddinfodoctorComponent', () => {
  let component: AddinfodoctorComponent;
  let fixture: ComponentFixture<AddinfodoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinfodoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinfodoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
