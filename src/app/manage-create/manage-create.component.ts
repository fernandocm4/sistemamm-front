import { Component, Injectable, OnInit } from '@angular/core';
import { Memberdata } from '../members/membersdata';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MembersdataService } from '../members/membersdata.service';
import { ManageCreateService } from './manage-create.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-create',
  imports: [ReactiveFormsModule, CommonModule, MatIconModule, NgxMaskDirective, RouterLink],
  providers: [provideNgxMask()],
  templateUrl: './manage-create.component.html',
  styleUrl: './manage-create.component.css'
})

@Injectable({providedIn: 'root'})
export class ManageCreateComponent implements OnInit{

  passwordType: string = 'password';

  desativarBotao: boolean = true;

  memberForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    username: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),//aqui a senha nao precisa de minimo de caracteres porque a ideia é o membro altera-la
    setor: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required, Validators.minLength(10)])
  });

  constructor (private http: HttpClient ,private newMemberService: ManageCreateService, private route: Router) {}


  ngOnInit(): void {
      
  }

  onSubmit(): void {

    if (this.memberForm.valid) {
      this.newMemberService.postMember(this.memberForm.value).subscribe({
            next: () => {
              this.route.navigate(['time']);
            }
          });
    } else {
      this.memberForm.markAllAsTouched();
    }

    
    
  }

  controlPasswordVisibility(): void {
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }

}
