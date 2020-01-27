import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrdetailsComponent } from './drdetails.component';

describe('DrdetailsComponent', () => {
  let component: DrdetailsComponent;
  let fixture: ComponentFixture<DrdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
