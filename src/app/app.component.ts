import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngRouting';
  token: string | null = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('isLoggedInToken');
  }

  logout() {
    sessionStorage.removeItem('isLoggedInToken');
    this.router.navigate(['/login']);
  }
}


//Passing info between components
// 1. using @Input() and @Output() decorators
// 2. using injectable constructors of components
// 3. using services (promises, observables, etc.) -- NGXS, NGRX, etc. (Manage state of the application)
// 4. passing parameters in the URL (routes)