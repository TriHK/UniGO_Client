import {Component, OnInit, OnDestroy, ChangeDetectorRef, ViewContainerRef} from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from 'angular2-social-login';
import {LoginService} from './service/login/login.service';
import {NgForm} from "@angular/forms";
import {Constants} from "./constants";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {User} from "./model/User";
import {BaseService} from "./service/base-service/base.service";
import {UniversityService} from "./service/university/university.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit, OnDestroy {
  public user: User;
  sub: any;
  public title;
  public content;
  constructor(private auth: AuthService, private loginService: LoginService,
              private baseService: BaseService, private uniService : UniversityService,
              private contants: Constants,public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      if(this.user){
        this.loginService.setRole(this.user.role.id);
        this.baseService.setUser(this.user);
        this.loginService.setLogin(true);
      }
  }
  public login(provider) {
    this.sub = this.auth.login(provider).subscribe(
      (data) => {
        this.baseService.setUser(data);
        this.user = this.baseService.getUser();
        $('#myModal').hide();
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        let dataLogin= {
          'email': this.user.email,
          'image': this.user.image,
          'name': this.user.name,
          'providerId': this.user.id,
          'providerName': this.user.providerName
        };
        this.loginService.loginProvider(this.contants.LOGIN_PROVIDER,dataLogin).subscribe((res:Response)=>{
          if(res){
            this.baseService.setUser(res);
            this.user = this.baseService.getUser();
            this.loginService.setLogin(true);
            this.loginService.setRole(this.user.role.id);
            this.loginService.broadcastTextChange(this.user);
            this.uniService.getQuestionByUser(this.user.id).subscribe(res=>{
              let count = 0;
              for(let i = 0; i<res.length; i++){
                count = count + res[i].count;
              }
              this.uniService.broadcastTextChange(count);
            });
            localStorage.setItem('currentUser', JSON.stringify(this.user));
          }
        });
      }
    );
  }

  public onRegister(registerForm: NgForm){
    let data = {
      'username': registerForm.value.nameRegister,
      'password': registerForm.value.passResgiter,
      'email': registerForm.value.registerEmail
    };
    this.loginService.register(this.contants.REGISTER,data).subscribe((response:any)=>{
         if(response){
           $('#myModal').hide();
           $('body').removeClass('modal-open');
           $('.modal-backdrop').remove();
           this.toastr.success('Bạn đã đăng ký thành công', 'Thành công!');
           registerForm.onReset();
         }
      },error=>{
        if(error.status==this.contants.CONFLICT){
          this.toastr.error('Tài khoản này đã tồn tại. Vui lòng thử lại', 'Thất bại');
          registerForm.onReset();
        }else{
          this.toastr.error('Vui lòng kiểm tra lại kết nối mạng', 'Thất bại');
        };
      });
    registerForm.onReset();
  }
  public onLogin(value){
    let data = {
      'username': value.username,
      'password': value.password
    };
    this.loginService.login(this.contants.LOGIN,data).subscribe((response:any)=>{
      if(response){
        this.loginService.setLogin(true);
        this.baseService.setUser(response);
        this.user = this.baseService.getUser();
        this.loginService.setRole(this.user.role.id);
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        $('#myModal').hide();
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        this.loginService.broadcastTextChange(this.user);
        this.uniService.getQuestionByUser(this.user.id).subscribe(res=>{
          if(res){
            let count = 0;
            for(let i = 0; i<res.length; i++){
              count = count + res[i].count;
            }
            this.uniService.broadcastTextChange(count);
          }
        });
      }
    },error=>{
      if(error.status==this.contants.UNAUTHORIZED){
        this.toastr.error('Username/Password không đúng. Vui lòng thử lại.', 'Thất bại!');
      }else{
        this.toastr.error('Vui lòng kiểm tra lại kết nối mạng', 'Thất bại');
      };
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    $("#myModal").html("");
  }


}
