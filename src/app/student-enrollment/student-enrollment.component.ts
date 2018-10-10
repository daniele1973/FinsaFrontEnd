import { Component, OnInit } from '@angular/core';
import { StudentEnrollmentService } from './student-enrollment.service';
import { ECourse } from './EditionCourse';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseStudent } from './StudentCourse';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-student-enrollment',
  templateUrl: './student-enrollment.component.html',
  styleUrls: ['./student-enrollment.component.css']
})
export class StudentEnrollmentComponent implements OnInit {

  idStud: number;
  private sub: Subscription;
  edizCourse : ECourse[] = [];
  courseStudent: CourseStudent = {};
  errorMessage : string = "tutto OK";
  //Iscrivi: (idEdizioneCorso: number) => void = {}
  constructor(private route: ActivatedRoute,
    private router: Router,
    private studentEnrollment: StudentEnrollmentService,
    private http:HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params=>{
        this.idStud= +params['id'];
        console.log("id -----> "+this.idStud);
        this.studentEnrollment.getAllECourse().subscribe(
           instr => this.edizCourse = instr,
           err => this.errorMessage = <any>err
       );
      });

  }
  Iscrivi(idEdizioneCorso: number): void
  {
    console.log("------ son qui dentro -----");
      this.courseStudent.iDAllievo=this.idStud;
      this.courseStudent.iDEdizioneCorso= idEdizioneCorso;
      const url = this.studentEnrollment.CourseStudentUrl;

      let result = this.http.post<CourseStudent>(url,this.courseStudent).pipe(
        tap(d => console.log(JSON.stringify(d)))
      );

      result.subscribe(x=>console.log(x),error => console.log(error));
  }

}
