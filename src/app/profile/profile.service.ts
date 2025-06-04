import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl = 'http://localhost:8080';

  private _profileUpdate = new Subject<void>();
  profileUpdate$: Observable<void> = this._profileUpdate.asObservable();

  constructor(private http: HttpClient) { }

  getMember(id: string | null):Observable<Profile> {
    if (id == null) {
      return this.http.get<Profile>(`${this.baseUrl}/members`);
    }
    return this.http.get<Profile>(`${this.baseUrl}/members/${id}`);
  }

  notificaUpdate(): void {
    this._profileUpdate.next();
  }

}
