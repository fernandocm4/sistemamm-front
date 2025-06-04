import { Component, inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UpdateModalService } from './update-modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Observable, Subscription, withLatestFrom } from 'rxjs';
import { ProfileService } from '../profile.service';
import { LoginModalServiceService } from '../../login-modal/login-modal-service.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-update-modal',
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule, MatIconModule],
  templateUrl: './update-modal.component.html',
  styleUrl: './update-modal.component.css'
})

@Injectable({providedIn: 'root'})
export class UpdateModalComponent implements OnInit, OnDestroy{
  members: any;


  passwordType: string = 'password';


  memberForm = new FormGroup({
    message: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  route = inject(ActivatedRoute)
  id: string | null = this.route.snapshot.paramMap.get('user_id');

  private routeSub: Subscription | undefined;
  userUsername: string | null = null;

  loggedId$: Observable<string | null>

  

  constructor (private updateModalService: UpdateModalService, private router: Router, private loginService: LoginModalServiceService,private profileUpdateNotifica: ProfileService) {
    this.userUsername = this.loginService.checkUsername();
    this.loggedId$ = this.loginService.loggedId$;
  }


  controlPasswordVisibility(): void {
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }

  ngOnInit(): void {
      console.log(this.userUsername);
  }

  ngOnDestroy(): void {
      if (this.routeSub) {
        this.routeSub.unsubscribe();
      }
  }

  /*onSubmit(): void {
    this.updateModalService.updateMember(this.memberForm.value, this.userUsername).subscribe({
      next: () => {
        
        this.router.navigate([`time/${(this.loggedId$)}`]);
        console.log('era pra ter ido');
      }
    }
    );
  }*/

    onSubmit(): void {
    this.updateModalService.updateMember(this.memberForm.value, this.userUsername).pipe(withLatestFrom(this.loggedId$)).subscribe({
      next: ([updateResponse, loggedId]) => {
        this.profileUpdateNotifica.notificaUpdate();
        
      }
    }
    );
  }

}
