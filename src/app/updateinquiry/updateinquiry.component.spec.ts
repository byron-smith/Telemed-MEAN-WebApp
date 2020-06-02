import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinquiryComponent } from './updateinquiry.component';

describe('UpdateinquiryComponent', () => {
  let component: UpdateinquiryComponent;
  let fixture: ComponentFixture<UpdateinquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateinquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateinquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
