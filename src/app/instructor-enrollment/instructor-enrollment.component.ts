import { Component, OnInit } from '@angular/core';
// import { StudentEnrollmentService } from './student-enrollment.service';
// import { ECourse } from './EditionCourse';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { CourseInstructor } from './instructor-course';
import { InstructorEnrollmentService } from './instructor-enroll-services';
import { ECourse } from './instructor-edition-course';
import { NgModule } from "@angular/core";

@Component({
  selector: 'app-instructor-enrollment',
  templateUrl: './instructor-enrollment.component.html',
  styleUrls: ['./instructor-enrollment.component.css']
})
export class InstructorEnrollmentComponent implements OnInit {

  idDoc: number;
  private sub: Subscription;
  edizCourse : ECourse[] = [];
  courseInstructor: CourseInstructor = {};
  errorMessage : string = "tutto OK";
  //Iscrivi: (idEdizioneCorso: number) => void = {}
  constructor(private route: ActivatedRoute,
    private router: Router,
    private InstructorEnrollment: InstructorEnrollmentService,
    private http:HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params=>{
        this.idDoc= +params['id'];
        console.log("id -----> "+this.idDoc);
        this.InstructorEnrollment.getAllECourse().subscribe(
           instr => this.edizCourse = instr,
           err => this.errorMessage = <any>err
       );
      });

  }
  Iscrivi(idEdizioneCorso: number): void
  {
    console.log("------ son qui dentro -----");
      this.courseInstructor.idDocente=this.idDoc;
      this.courseInstructor.idEdizioneCorso= idEdizioneCorso;
      const url = this.InstructorEnrollment.CourseInstructorUrl;

      let result = this.http.post<CourseInstructor>(url,this.courseInstructor).pipe(
        tap(d => console.log(JSON.stringify(d)))
      );

      result.subscribe(x=>console.log(x),error => console.log(error));
  }

}