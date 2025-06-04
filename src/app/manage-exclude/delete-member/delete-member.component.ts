import { Component, Injectable } from '@angular/core';
import { Memberdata } from '../../members/membersdata';
import { MembersdataService } from '../../members/membersdata.service';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-member',
  imports: [RouterLink, MatIconModule],
  templateUrl: './delete-member.component.html',
  styleUrl: './delete-member.component.css'
})

@Injectable({providedIn: 'root'})
export class DeleteMemberComponent {
members: Memberdata[] = [];
  

  constructor(private memberdataService: MembersdataService) {}

  ngOnInit(): void {
    this.memberdataService.getMembers().subscribe({
      next: (members) => {
        this.members = members;
      }
    });
  }
}
