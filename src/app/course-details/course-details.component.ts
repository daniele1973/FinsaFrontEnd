import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../courses/course.service';
import { Subscription } from 'rxjs';
import { Course } from '../courses/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  private sub: Subscription;
  course: Course | undefined;
  errorMessage: "Nituccia";


  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: CourseService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.getCourse(id);
      });
  }
  getCourse(id: number): any {
    console.log(`Chiamata getCourse(${id})`);

    this.productService.getCourse(id).subscribe(
      course => {this.course = course;
                     console.log(`Successo! course.idCorso=${course.idCorso}`); },
      error => {this.errorMessage = <any>error;
                alert(`FALLIMENTO: error=${error}`);}
    );
  }

  onBack(): void {
    this.router.navigate(['/ONBACK']);
  }

}
