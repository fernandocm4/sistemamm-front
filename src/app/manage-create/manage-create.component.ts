import { Component, Injectable } from '@angular/core';
import { Memberdata } from '../members/membersdata';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MembersdataService } from '../members/membersdata.service';
import { ManageCreateService } from './manage-create.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-manage-create',
  imports: [ReactiveFormsModule, CommonModule, MatIconModule],
  templateUrl: './manage-create.component.html',
  styleUrl: './manage-create.component.css'
})

@Injectable({providedIn: 'root'})
export class ManageCreateComponent {

  passwordType: string = 'password';

  memberForm = new FormGroup({
    nome: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    setor: new FormControl(''),
    phone: new FormControl('')
  });

  constructor (private http: HttpClient ,private newMemberService: ManageCreateService, private route: Router) {}

  onSubmit(): void {
    this.newMemberService.postMember(this.memberForm.value).subscribe({
      next: () => {
        this.route.navigate(['time']);
      }
    });
    
  }

  controlPasswordVisibility(): void {
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }

}
