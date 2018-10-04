import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditionsComponent } from './course-editions.component';

describe('CourseEditionsComponent', () => {
  let component: CourseEditionsComponent;
  let fixture: ComponentFixture<CourseEditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
