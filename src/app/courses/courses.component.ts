import { Component, OnInit } from '@angular/core';
import {Course} from './course'
import { CourseService } from './course.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursePippo :Course;

  errorMessage :"Poffarbacco"
  courses :Course[]=[];

  constructor(private courseService: CourseService, 
              private router :Router,
              private route :ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => console.log(params));

    let  observableResult : Observable<Course[]>
     =  this.courseService.getAllCourses();

     observableResult.subscribe(
         c => this.courses = c,
         err => this.errorMessage = <any>err
     );
  }

  onBack(): void {
    this.router.navigate(['/XXXX']);
  }
}
