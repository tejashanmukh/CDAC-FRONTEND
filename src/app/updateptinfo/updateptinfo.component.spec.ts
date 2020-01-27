import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateptinfoComponent } from './updateptinfo.component';

describe('UpdateptinfoComponent', () => {
  let component: UpdateptinfoComponent;
  let fixture: ComponentFixture<UpdateptinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateptinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateptinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
