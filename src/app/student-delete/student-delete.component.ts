import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {


  private sub: Subscription;
  private idStud: number;
  errorMessage: string = 'tutto OK';
  private url: string;
  constructor(private route: ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.idStud = +params['id'];
        this.url = `http://localhost:56871/api/Allievi/${this.idStud}/delete`;
        this.Delete(this.idStud);
      });
  }

  Delete(id: number) {
    const result = this.http.delete<number>(this.url).pipe(
      tap(d => console.log(JSON.stringify(d)))
    );

    result.subscribe(x => console.log(x), error => console.log(error));
  }
}
