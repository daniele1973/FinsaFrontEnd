import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentForm } from './customerStudent';
import { StudentAddService } from './add-student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  customer = new StudentForm();
  private sub: Subscription;
  errorMessage : string = "tutto OK";

  constructor(private route: ActivatedRoute,
    private router: Router,private studentService: StudentAddService,private http:HttpClient) { }
  

  ngOnInit() {

   /* this.sub = this.route.params.subscribe(
      params => {
        const allievo = params['customerForm'];
        console.log("id -----> "+allievo.valueOf.name);
        this.studentService.save(allievo).subscribe(
          instr => this.customer = instr,
            err => this.errorMessage = <any>err
        );
      });*/
  }
  save(customerForm: NgForm) {
    const url = this.studentService.studentUrl; ///${customerForm.value}
    //console.log(customerForm.form);
    //console.log('Saved: ' + JSON.stringify(customerForm.value));
    
    
    let result = this.http.post<StudentForm>(url,customerForm.value).pipe(
        tap(d => console.log(JSON.stringify(d)))
    );

    result.subscribe(x=>console.log(x));
    return result;
  }
  /*save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }*/

}
