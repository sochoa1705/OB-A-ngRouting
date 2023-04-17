import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
//import router 
import { Router, NavigationExtras } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';
import { IRandomContact } from 'src/app/models/randomuser';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  contactSelected: IRandomContact | undefined;
  token: string | null ="";

  constructor( private router: Router) { }

  ngOnInit() {
    //Probe the session token exists
    this.token = sessionStorage.getItem('isLoggedInToken');
    //Read the state
    if(history.state.data) {
      this.contactSelected = history.state.data;
      console.log(this.contactSelected);
    }
  }

navToContacts(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        filter: 'all'
      }
    }
    this.router.navigate(['/contacts'], navigationExtras);
  }


}

