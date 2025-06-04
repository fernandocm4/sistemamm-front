import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../profile/profile';

@Injectable({
  providedIn: 'root'
})
export class ManageExcludeService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  deleteMember(id: string | null): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/members/manage/${id}`);

  }

}
