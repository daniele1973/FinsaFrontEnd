import { Component, OnInit } from '@angular/core';
import { Student } from './student-details';
import { StudentDetailsService } from './student-details.service';
import { Observable, Subscription } from "rxjs";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student : Student;
  errorMessage : string = "tutto OK";
  private sub: Subscription;
  constructor(private route: ActivatedRoute,
    private router: Router,private studentService: StudentDetailsService){

  }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(
      params => {
        const id = +params['id'];
        console.log("id -----> "+id);
        this.studentService.getStudents(id).subscribe(
          instr => this.student = instr,
            err => this.errorMessage = <any>err
        );
      });
    }
}

