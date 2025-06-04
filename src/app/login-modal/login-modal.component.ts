import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModalServiceService } from './login-modal-service.service';

@Component({
  selector: 'app-login-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {

  username: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    private loginService: LoginModalServiceService,
    private router: Router
  ){}

  onLogin(): void {
    if(!this.username || !this.password) {
      return console.log("PREENCHA OS CAMPOS");
    }

    this.loading = true;

    this.loginService.loginMember(this.username, this.password).subscribe({
      next: (token: string) => {
        console.log("Login bem sucedido", token);

        this.loginService.saveToken(token);



        console.log("Login realizado com sucesso");
        this.router.navigate(['/time']);
        
      },
      error: (error) => {
        console.log("Erro no login:", error);
        if (error.status === 401) {
          console.log("email ou senha inválidos");
        } else if (error.status === 403) {
          console.log("Você não tem permissão.")
        } else {
          console.log("Erro interno no servidor.")
        }
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
