import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquirylistComponent } from './inquirylist.component';

describe('InquirylistComponent', () => {
  let component: InquirylistComponent;
  let fixture: ComponentFixture<InquirylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquirylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquirylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
