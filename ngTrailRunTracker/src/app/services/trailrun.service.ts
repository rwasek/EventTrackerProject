import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrailrunService {

  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/trailruns';

  constructor() { }

  // TODO: get, post, put, delete
}
