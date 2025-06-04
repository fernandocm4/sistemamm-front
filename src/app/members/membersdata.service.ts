import { Injectable } from '@angular/core';
import { Memberdata } from './membersdata';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginModalServiceService } from '../login-modal/login-modal-service.service';

@Injectable({
  providedIn: 'root'
})
export class MembersdataService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private checkLogged: LoginModalServiceService) {

   }

  getMembers(): Observable<Memberdata[]> {
    if (this.checkLogged.checkUsername() === null) {
      return throwError(() => new Error('Não autenticado'));
    }
    return this.http.get<Memberdata[]>(`${this.baseUrl}/members`);
  }
}
