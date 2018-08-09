import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from '../../service/login/login.service';
import {BaseService} from '../../service/base-service/base.service';

@Injectable()
export class CheckLoginGuard implements CanActivate {
  constructor(private loginService: LoginService, private baseService: BaseService,private router: Router) {}
  canActivate() {
    const status = this.loginService.checkLogged();
    if (!status) {
       this.baseService.showLoginForm();
       // this.router.navigate(['home']);
    }
    return status;
  }
}
