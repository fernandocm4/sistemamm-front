import { Component, inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from './profile.service';
import { CommonModule } from '@angular/common';
import { LoginModalServiceService } from '../login-modal/login-modal-service.service';
import { Observable, Subject, Subscription } from 'rxjs';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { PhoneMaskPipe } from '../phone-mask.pipe';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, MatDialogModule, PhoneMaskPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

@Injectable({providedIn: 'root'})
export class ProfileComponent implements OnInit, OnDestroy{

  members: any;

  route = inject(ActivatedRoute)
  
  memberProfile: any;
  memberUrl: string | null = null;
  userUsername: string | null = null;

  private routeSub: Subscription | undefined;
  private profileNotifica: Subscription | undefined;

  constructor (private profileService: ProfileService, private loginService: LoginModalServiceService) {
    this.userUsername = this.loginService.checkUsername()
  }

  
  ngOnInit(): void {

    this.routeSub = this.route.paramMap.subscribe(params => {
      this.memberUrl = params.get('user_id');

      if (this.memberUrl) {
        this.loadMemberProfile(this.memberUrl);
      }
    })

    this.profileNotifica = this.profileService.profileUpdate$.subscribe(() => {
      if (this.memberUrl) {
        this.loadMemberProfile(this.memberUrl);
      }
    });

  }

  ngOnDestroy(): void {
      if(this.routeSub) {
        this.routeSub.unsubscribe();
      }
  }


  loadMemberProfile(id: string): void {
    this.profileService.getMember(id).subscribe({
      next: (data) => {
        this.members = data
      }
    })
  }



  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(UpdateModalComponent);

    dialogRef.afterClosed().subscribe();
  }



}
