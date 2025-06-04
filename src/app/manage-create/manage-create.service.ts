import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageCreateService {

  

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  postMember(memberData: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/members/manage/register`, memberData);
  }

  
}
