import { Component } from '@angular/core';
import { LoginUserService } from '../login-user.service';
import { User } from '../user';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {

  user:User = new User();

  constructor(private loginUserService : LoginUserService){}

  LoginUser(){
    console.log(this.user)
    this.loginUserService.LoginUser(this.user).subscribe(data=>{
      alert("Login Succesfully")
    },error=>alert("Sorry, please enter the correct email and password"));
  }

}
