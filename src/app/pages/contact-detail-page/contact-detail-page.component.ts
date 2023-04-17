import { Component, OnInit } from '@angular/core';
//import Activeated Route
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';
import { IRandomContact } from 'src/app/models/randomuser';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.css']
})
export class ContactDetailPageComponent implements OnInit {

  id: any | undefined;
  contact: IRandomContact | undefined;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //get the id from the route
    //let id = this.route.snapshot.params['id'];
    //using observable
    this.route.params.subscribe(
      params => {
        if (params['id']) {
          this.id = params['id'];
        }
      });
      //read the state from contact page
      if(history.state.data){
        this.contact = history.state.data;
      }

  }

}


