import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorInsertComponent } from './instructor-insert.component';

describe('InstructorInsertComponent', () => {
  let component: InstructorInsertComponent;
  let fixture: ComponentFixture<InstructorInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
