import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorEnrollmentComponent } from './instructor-enrollment.component';

describe('InstructorEnrollmentComponent', () => {
  let component: InstructorEnrollmentComponent;
  let fixture: ComponentFixture<InstructorEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
