import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class LoginModalServiceService {

  private baseUrl = 'http://localhost:8080';

  private logged = new BehaviorSubject<boolean>(false);
  isLogged$: Observable<boolean> = this.logged.asObservable();


  private userRole = new BehaviorSubject<string | null>(null);
  userRole$: Observable<string | null> = this.userRole.asObservable();

  private _loggedId = new BehaviorSubject<string | null>(null);
  loggedId$: Observable<string | null> = this._loggedId.asObservable();

  constructor(private http: HttpClient) {
    this.checkLogin();
  }

  private decodeToken(token: string): any | null {
    try {
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      console.log(JSON.parse(decodedPayload));
      return JSON.parse(decodedPayload);
    } catch (e) {
      console.log('Erro ao decodificar o token:', e);
      return null
    }
  }


  checkUsername(): string | null {
    const token = localStorage.getItem('auth_token');
    if (token) {
      const decodedUsername = this.decodeToken(token);
      return decodedUsername && decodedUsername.user_id ? decodedUsername.user_id : null;
    }
    return null;
  }

  private checkLogin(): void {
    const token = localStorage.getItem('auth_token');
    if (token) {
      const decoded = this.decodeToken(token);
      if (decoded) {
          this.logged.next(true);
          this.userRole.next(decoded.scope || null);
          this._loggedId.next(decoded.user_id || null);
        } else {
          this.clearLoginData();
        }
    } else {
      this.clearLoginData();
    }
  }

  private clearLoginData(): void {
    this.removeToken();
    this.logged.next(false);
    this.userRole.next(null);
    this._loggedId.next(null);
  }

  loginMember(username: string, password:string): Observable<string> {

    const dados = `${username}:${password}`;

    const dadosCodificados = btoa(dados);

    const headers = new HttpHeaders({
      'Authorization':`Basic ${dadosCodificados}`
    });

    return this.http.post(`${this.baseUrl}/authenticate`, {},{headers: headers, responseType: 'text'}).pipe(
      tap(token => {
        this.saveToken(token);
        this.logged.next(true);
      })
    );
  }

  saveToken(token : string): void {
    localStorage.setItem('auth_token', token);
    const decoded = this.decodeToken(token);

    if (decoded) {
        this.userRole.next(decoded.scope || null);
        this._loggedId.next(decoded.user_id || null);
      } else {
        this.clearLoginData();
      }
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  removeToken(): void {
    return localStorage.removeItem('auth_token');
  }

  idLogged(): boolean {
    return !!this.getToken();
  }

  isGerente(): Observable<boolean> {
    return this.userRole$.pipe(
      map(scope => scope === 'ROLE_GERENTE')
    );
  }

  logout(): void {
    this.clearLoginData();
    this._loggedId.next(null);
  }
}
