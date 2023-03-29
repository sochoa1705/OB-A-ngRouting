import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  contactList: IContact[] = [
    {
      id: 1,
      name: 'John',
      lastname: 'Doe',
      mail: 'jdoe@ghjkl.com'
    },
    {
      id: 2,
      name: 'Joe',
      lastname: 'Dampoo',
      mail: 'jdampoo@ghjkl.com'
    },
    {
      id: 3,
      name: 'Jane',
      lastname: 'Cane',
      mail: 'jcae@ghjkl.com'
    }
  ];
  constructor() { }

  ngOnInit() {
  }


}
