import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Memberdata } from '../../members/membersdata';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Memberdata[]> {
    return this.http.get<Memberdata[]>(`${this.baseUrl}/members`);
  }
}
