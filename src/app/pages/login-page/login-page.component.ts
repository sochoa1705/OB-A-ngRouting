import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email:string = ''; //eve.holt@reqres.in
  password:string = ''; //cityslicka

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    
    let tokenAuth = sessionStorage.getItem('isLoggedInToken');
    if(tokenAuth){
      this.router.navigate(['/home']);
    }
    
  }

  loginUser(value:any){
    let {email, password} = value;

    this.authService.login(email,password).subscribe(
      (response:any) => {
        if(response.token){
          sessionStorage.setItem('isLoggedInToken', response.token);
          this.router.navigate(['/home']);
        }

      },
      (error:any) => console.error(`Something went wrong while try to Login: ${error} `),
      () => console.info('Login completed')
    )
  }

}

