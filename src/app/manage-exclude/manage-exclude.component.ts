import { Component, inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile/profile.service';
import { ManageExcludeService } from './manage-exclude.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-exclude',
  imports: [RouterLink],
  templateUrl: './manage-exclude.component.html',
  styleUrl: './manage-exclude.component.css'
})
@Injectable({providedIn: 'root'})
export class ManageExcludeComponent /*implements OnInit*/{
members: any;

  route = inject(ActivatedRoute)
  id: string | null = this.route.snapshot.paramMap.get('user_id');

  constructor (private profileService: ProfileService, private deleteService: ManageExcludeService, private router: Router) {}

  ngOnInit(): void {
    this.profileService.getMember(this.id).subscribe((members) => {
      this.members = members
    });
    
  }

  deleteMembro(): void {
    this.deleteService.deleteMember(this.id).subscribe({
      next: () => {
        this.router.navigate(['manage/exclude']);
      }
    });
    
  }
}
