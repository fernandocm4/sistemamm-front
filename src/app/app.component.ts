import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute, } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginModalServiceService } from './login-modal/login-modal-service.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProfileService } from './profile/profile.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, MatMenuModule, MatIconModule, MatToolbarModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'front-mm-angular';

  isLogged$: Observable<boolean>;
  isGerente$: Observable<boolean>;

  userUsername: string | null = null;
  loggedId$: Observable<string | null>


  constructor(
    private loginService: LoginModalServiceService,
    private router: Router
  ) {
    this.isLogged$ = this.loginService.isLogged$;
    this.isGerente$ = this.loginService.isGerente();
    //this.userUsername = this.loginService.checkUsername();
    this.loggedId$ = this.loginService.loggedId$;
  }

  

  ngOnInit(): void {
      console.log(this.loggedId$);
  }



  onLogout(): void {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
