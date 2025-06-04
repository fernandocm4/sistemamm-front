import { Component, inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile/profile.service';
import { ManageUpdateService } from './manage-update.service';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-update',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './manage-update.component.html',
  styleUrl: './manage-update.component.css'
})

@Injectable({providedIn: 'root'})
export class ManageUpdateComponent implements OnInit, OnDestroy{

  members: any;

  route = inject(ActivatedRoute)
  //id: string | null = this.route.snapshot.paramMap.get('user_id');

  id: string | null = null;

  private routeSub: Subscription | undefined;

  memberForm = new FormGroup({
    nome: new FormControl(''),
    username: new FormControl(''),
    phone: new FormControl(''),
    setor: new FormControl('')
  })

  constructor (private profileService: ProfileService, private manageUpdateService: ManageUpdateService, private router: Router) {}

  ngOnInit(): void {


    this.routeSub = this.route.paramMap.subscribe(params => {
      this.id = params.get('user_id');
      if(this.id) {
        this.profileService.getMember(this.id).subscribe({
          next: (memberData) => {
            this.members = memberData;

            this.memberForm.patchValue({
              nome: memberData.nome,
              username: memberData.username,
              phone: memberData.phone,
              setor: memberData.setor
            })
          }
        });
      }
    });

    /*this.profileService.getMember(this.id).subscribe((members) => {
      this.members = members
    });*/
    
  }

  ngOnDestroy(): void {
      if (this.routeSub) {
        this.routeSub.unsubscribe();
      }
  }

  updateMembro(): void {
    this.manageUpdateService.updateMember(this.memberForm.value,this.id).subscribe({
      next: () => {
        this.router.navigate([`time/${this.id}`]);
      }
    });
    
  }

}
