import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  filterGender : string = 'all';
  contactList: IContact[] = [];

  

  constructor(private router:Router, private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    
    //Get Query  Params
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParams:', params.filter)
      if(params.filter){
        this.filterGender = params.filter;
      }
       //Get contact list from our service
        this.contactService.getContacts(this.filterGender).then((contacts: IContact[]) => this.contactList=contacts)
        .catch((error: any) => {
          console.log('Error:', error);
        }).finally(() => console.info('Contacts request completed'));

    });
   


  }
  
  //Example of passing info betwween components by state
  backToHome(contact: IContact) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: contact
      }
    }
    this.router.navigate(['/home'],navigationExtras);
  }
  




}
