import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelabComponent } from './updatelab.component';

describe('UpdatelabComponent', () => {
  let component: UpdatelabComponent;
  let fixture: ComponentFixture<UpdatelabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatelabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
