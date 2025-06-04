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

  errorMessage: string | null = null;

  constructor(
    private loginService: LoginModalServiceService,
    private router: Router
  ){}

  onLogin(): void {
    this.errorMessage = null;
    if(!this.username || !this.password) {
      this.errorMessage = 'Preencha os campos de email e senha.';
      return
    }

    this.loading = true;

    this.loginService.loginMember(this.username, this.password).subscribe({
      next: (token: string) => {
        //console.log("Login bem sucedido", token);

        this.loginService.saveToken(token);



        //console.log("Login realizado com sucesso");
        this.router.navigate(['/time']);
        
      },
      error: (error) => {
        console.log("Erro no login:", error);
        if (error.status === 401) {
          this.errorMessage = 'Email ou senha inválidos.';
        } else if (error.status === 400) {
          this.errorMessage = 'Requisição inválida, verifique os dados.';
        } else {
          this.errorMessage = 'Ocorreu um erro ao tentar fazer o login. Tente novamente mais terde.';
        }
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
