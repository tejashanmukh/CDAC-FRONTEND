import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalshoppeopleComponent } from './medicalshoppeople.component';

describe('MedicalshoppeopleComponent', () => {
  let component: MedicalshoppeopleComponent;
  let fixture: ComponentFixture<MedicalshoppeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalshoppeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalshoppeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
