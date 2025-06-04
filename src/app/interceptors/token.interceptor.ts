import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core'; // Importe 'inject'
import { LoginModalServiceService } from '../login-modal/login-modal-service.service';


export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const loginService = inject(LoginModalServiceService);

  const token = loginService.getToken();
  const isLoginRequest = req.url.includes('http://localhost:8080/authenticate');

  if (token && !isLoginRequest) {
    const cloneRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloneRequest);
  }

  return next(req);
};
