import { Component, OnInit } from '@angular/core';
import { Student } from './student-details';
import { StudentDetailsService } from './student-details.service';
import { Observable, Subscription, throwError } from "rxjs";
import { ActivatedRoute, Router } from '@angular/router';
import { Corso } from './Corsi';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student : Student;
  listCourse: Corso[] = [];
  id: number;
  errorMessage : string = "tutto OK";
  private sub: Subscription;
  studentFCUrl : string;


  constructor(private route: ActivatedRoute,
    private router: Router,private studentService: StudentDetailsService, private http:HttpClient){

  }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
        console.log("id -----> "+this.id);
        this.studentFCUrl = `http://localhost:56871/api/Allievi/${this.id}/corsi`;
        this.studentService.getStudents(this.id).subscribe(
          instr => this.student = instr,
            err => this.errorMessage = <any>err
        );
      });
    }

    DammiICorsi()
    {
      this.http.get<Corso[]>(this.studentFCUrl)
            .pipe(
                tap(d => console.log(JSON.stringify(d))),
                catchError(this.handleError)
            ).subscribe(
              instr => this.listCourse = instr,
              err => this.errorMessage = <any>err
          );
    }
    handleError() {
      alert("Errore di sbaglio!")
      // throw new Error("Method not implemented.");
      return throwError("Errore di sbaglio!");
  }
}

