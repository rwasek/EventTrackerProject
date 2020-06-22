import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trailrun } from '../models/trailrun';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrailrunService {

  // private baseUrl = 'http://localhost:8084/';
  private url = environment.baseUrl + 'api/trailruns';

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

  create(newRun: Trailrun){
    return this.http.post<Trailrun>(this.url, newRun).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('error in trailrun service create method');
      })
    );
  }

  update(selected: Trailrun){
    return this.http.put<Trailrun>(`${this.url}/${selected.id}`, selected).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('error in trailrun service update()');
      })
    );
  }

  disable(run: Trailrun){
    return this.http.put<Trailrun>(`${this.url}/disable/${run.id}`, run).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('error in trailrun service disable()');
      })
    );
  }
}

