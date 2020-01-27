import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorapplistComponent } from './doctorapplist.component';

describe('DoctorapplistComponent', () => {
  let component: DoctorapplistComponent;
  let fixture: ComponentFixture<DoctorapplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorapplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorapplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
