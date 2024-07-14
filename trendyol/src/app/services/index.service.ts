import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndexService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getNavigation() {
    return this.http.get(this.url + 'navigation');
  }
}
