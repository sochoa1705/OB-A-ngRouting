import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  @Output() loginAction: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])]
    })
  }

  //Create getters and setters 
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  //Auth service Methods
  login() {
    if (this.loginForm.valid) {
      //console.table(this.loginForm.value);
      this.loginAction.emit(this.loginForm.value);
      //this.loginForm.reset();
    }
  }

}
