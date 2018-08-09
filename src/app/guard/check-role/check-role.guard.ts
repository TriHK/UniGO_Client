import {Injectable, ViewContainerRef} from '@angular/core';
import { CanActivate} from '@angular/router';
import {LoginService} from "../../service/login/login.service";
import {ToastsManager} from "ng2-toastr/ng2-toastr";

@Injectable()
export class CheckRoleGuard implements CanActivate {
  constructor(private loginService: LoginService,public toastr: ToastsManager) {
    //this.toastr.setRootViewContainerRef(vcr);
  }
  canActivate() {
    const role = this.loginService.checkRole();
    if (role != 1) {
      console.log(role);
      this.toastr.warning('Vui lòng đăng nhập với vai trò người dùng', 'Thất bại',{showCloseButton: true});
      return false;
    }
    return true;
  }
}
