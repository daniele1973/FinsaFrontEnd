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
    console.log(this.router)
  }

  conferma(myFirstNgForm :NgForm){
    console.log(myFirstNgForm);
    
    let debug_serverResponse = this.courseService.createCourse(this.corsoDaInserire);
    // debug_serverResponse.subscribe(this.notifica); //NON FUNZIONA PER IL SOLITO BINDING DEL THIS DI JAVASCRIPT
    // debug_serverResponse.subscribe( n=> this.notifica(n) );
    debug_serverResponse.subscribe( this.notifica.bind(this) );
    console.log("debug_serverResponse:");
    console.log(debug_serverResponse);

    // alert("ragginta la fine di  conferma(myFirstNgForm :NgForm)");
  }
  notifica(notifica: CourseForInsert) {
    console.log("XXX");
    console.log(this);

    console.log("NOTIFICA:");
    console.log(notifica);
    this.router.navigate(["courses",notifica.idCorso]);
  }

}
