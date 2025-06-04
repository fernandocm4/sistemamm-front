import { Component, Injectable } from '@angular/core';
import { Memberdata } from '../../members/membersdata';
import { MembersdataService } from '../../members/membersdata.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-update-list',
  imports: [MatIconModule, RouterLink],
  templateUrl: './update-list.component.html',
  styleUrl: './update-list.component.css'
})

@Injectable({providedIn: 'root'})
export class UpdateListComponent {
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
