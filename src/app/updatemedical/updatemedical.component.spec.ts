import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemedicalComponent } from './updatemedical.component';

describe('UpdatemedicalComponent', () => {
  let component: UpdatemedicalComponent;
  let fixture: ComponentFixture<UpdatemedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
