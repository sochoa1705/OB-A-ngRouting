import { Component, OnInit } from '@angular/core';
//import router 
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

navToContacts(): void {
    this.router.navigate(['/contacts']);
  }


}

