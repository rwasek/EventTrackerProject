import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trailrun } from '../models/trailrun';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrailrunService {

  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/trailruns';

  constructor(
    private http: HttpClient
  ) { }

  // TODO: get, post, put, delete

  index() {
    return this.http.get<Trailrun[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('error in trailrun service index method');
      })
    );
  }
}

