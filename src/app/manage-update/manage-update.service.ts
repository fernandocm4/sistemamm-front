import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageUpdateService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  updateMember(memberData: any, id: string | null): Observable<any>{
    return this.http.put(`${this.baseUrl}/members/manage/${id}`, memberData);
  }
}
