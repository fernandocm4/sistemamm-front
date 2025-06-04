import { Component, Injectable, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Memberdata } from './membersdata';
import { MembersdataService } from './membersdata.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-members',
  imports: [MatIconModule, RouterLink],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})

@Injectable({providedIn: 'root'})
export class MembersComponent implements OnInit{
members: Memberdata[] = [];
  

  constructor(private memberdataService: MembersdataService) {}

  ngOnInit(): void {
    this.memberdataService.getMembers().subscribe((members) => {
      this.members = members;
    });
  }

}
