import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    let tokenAuth = sessionStorage.getItem('isLoggedInToken');
    if(tokenAuth){
      this.router.navigate(['/home']);
    }
    
  }

  loginUser(){
    sessionStorage.setItem('isLoggedInToken', '123456789');
    this.router.navigate(['/contacts']);
  }

}

