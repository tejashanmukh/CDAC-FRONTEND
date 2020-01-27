import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpatientinfoComponent } from './addpatientinfo.component';

describe('AddpatientinfoComponent', () => {
  let component: AddpatientinfoComponent;
  let fixture: ComponentFixture<AddpatientinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpatientinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpatientinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
