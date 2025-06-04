import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomedataService {


  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getHomeData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/home`);
  }
}
