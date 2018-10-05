import { NgForm, NgModel } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../courses/course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseForInsert } from './courseForInsert';


@Component({
  selector: 'app-course-insert',
  templateUrl: './course-insert.component.html',
  styleUrls: ['./course-insert.component.css']
})
export class CourseInsertComponent implements OnInit {

  corsoDaInserire = new CourseForInsert();

  constructor(private courseService: CourseService, 
    private router :Router,
    private route :ActivatedRoute) { }

  ngOnInit() :void {
    this.route.params.subscribe( params => console.log(params) );
  }

  conferma(myFirstNgForm :NgForm){
    console.log(myFirstNgForm);
    
    let debug_serverResponse = this.courseService.createCourse(this.corsoDaInserire);
    // debug_serverResponse.subscribe(this.notifica)
    console.log(debug_serverResponse);

    alert("ragginta la fine di  conferma(myFirstNgForm :NgForm)");
  }
  notifica(notifica: CourseForInsert) {
    console.log(notifica);
  }

}
