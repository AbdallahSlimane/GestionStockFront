import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { AuthenticationRequest } from 'src/gs-api/src/models/authentication-request';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  

  authenticationRequest:AuthenticationRequest={};
  errorMessage ="";
  
  constructor(private userService:UserService, private router:Router) {

      

   }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.authenticationRequest).subscribe((data)=>{
      this.userService.setAccessToken(data);
      this.getUserByEmail(); 
      this.router.navigate(['']);
    },  error =>{
      this.errorMessage=error.error.message;
    });;
  }

  getUserByEmail():void{
   this.userService.getUserByEmail(this.authenticationRequest.login)
      .subscribe(user =>{
       this.userService.setConnectedUser(user)
      });
  }
}
