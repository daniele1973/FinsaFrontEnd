import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-instructor-delete',
  templateUrl: './instructor-delete.component.html',
  styleUrls: ['./instructor-delete.component.css']
})
export class InstructorDeleteComponent implements OnInit {

  private sub: Subscription;
  private idDoc: number;
  errorMessage: string = 'tutto OK';
  private url: string;
  constructor(private route: ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.idDoc = +params['id'];
        this.url = `http://localhost:56871/api/Docenti/${this.idDoc}/delete`;
        this.Delete(this.idDoc);
      });
  }

  Delete(id: number) {
    const result = this.http.delete<number>(this.url).pipe(
      tap(d => console.log(JSON.stringify(d)))
    );

    result.subscribe(x => console.log(x), error => console.log(error));
  }

}
