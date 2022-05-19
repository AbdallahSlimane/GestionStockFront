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
      this.userService.setConnecteduser(data);
      this.router.navigate(['']);
    },  error =>{
      console.log(this.authenticationRequest.login+ " et " +this.authenticationRequest.password);
      this.errorMessage=error.error.message;
    });;
  }
}
