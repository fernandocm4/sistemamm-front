import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private userEmail = new BehaviorSubject<string | null>(null);
  userEmail$: Observable<string | null> = this.userEmail.asObservable();

  constructor(private http: HttpClient) { }

 
}
