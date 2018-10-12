import { Component, OnInit } from '@angular/core';
import { InstructorForm } from './instructor';
import { NgForm } from '@angular/forms';
import { NgModule } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-instructor-insert',
  templateUrl: './instructor-insert.component.html',
  styleUrls: ['./instructor-insert.component.css']
})
export class InstructorInsertComponent implements OnInit {
  customer = new InstructorForm();
  instructorUrl : string = 'http://localhost:56871/api/Docenti';


  constructor(private route: ActivatedRoute,
    private router: Router,
    private http:HttpClient) { }

  ngOnInit() {
  }

  save(customerForm: NgForm) {
 
    let result = this.http.post<InstructorForm>(this.instructorUrl,customerForm.value).pipe(
        tap(d => console.log(JSON.stringify(d)))
    );

    result.subscribe(x=>console.log(x));
    return result;
  }

}
