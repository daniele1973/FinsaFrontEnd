import { Component, OnInit } from '@angular/core';
import { StudentEnrollmentService } from './student-enrollment.service';
import { ECourse } from './EditionCourse';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-enrollment',
  templateUrl: './student-enrollment.component.html',
  styleUrls: ['./student-enrollment.component.css']
})
export class StudentEnrollmentComponent implements OnInit {

  idStud: number;
  private sub: Subscription;
  edizCourse : ECourse[] = [];
  errorMessage : string = "tutto OK";
  constructor(private route: ActivatedRoute,
    private router: Router,
    private studentEnrollment: StudentEnrollmentService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe()//da continuare
    let  observableResult : Observable<ECourse[]>
    =  this.studentEnrollment.getAllECourse();

    observableResult.subscribe(
       // this.idStud = +params['id'],
        instr => this.edizCourse = instr,
        err => this.errorMessage = <any>err
    );
  }

}

/*ngOnInit(): void {

  this.sub = this.route.params.subscribe(
    params => {
      const id = +params['id'];
      console.log("id -----> "+id);
      this.studentService.getStudents(id).subscribe(
        instr => this.student = instr,
          err => this.errorMessage = <any>err
      );
    });
  }*/