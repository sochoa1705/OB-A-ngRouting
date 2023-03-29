import { Injectable } from '@angular/core';
import { CONTACT_LIST } from '../mocks/contacts.mocks';
import { IContact } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactList: IContact[] = CONTACT_LIST;

  constructor() { }

  getContacts(filter?:string): Promise<IContact[]> {
    /* More complain form of the code below
    return new Promise((resolve, reject) => {
      if (filter) {
        resolve(this.contactList.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())));
      } else {
        resolve(this.contactList);
      }
    });*/
    if(filter == 'male' || filter=='female')
    {
      let filterList: IContact[] = this.contactList.filter(contact=>contact.gender.toLowerCase() == filter);
      return Promise.resolve(filterList);

    }else if(filter=='all'){
      return Promise.resolve(this.contactList);
    }else{
      return Promise.reject('Invalid filter');
      
    }

  }


  
}
