import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalldoctorsComponent } from './listalldoctors.component';

describe('ListalldoctorsComponent', () => {
  let component: ListalldoctorsComponent;
  let fixture: ComponentFixture<ListalldoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListalldoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListalldoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
