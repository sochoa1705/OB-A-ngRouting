import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';
import { IRandomContact, Results } from 'src/app/models/randomuser';
import { ContactService } from 'src/app/services/contact.service';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
})
export class ContactsPageComponent implements OnInit {
  filterGender: string = 'all';
  contactList: IContact[] = [];
  randomContactList: IRandomContact[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private randomUser: RandomUserService
  ) {}

  ngOnInit() {
    //Get Query  Params
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParams:', params.filter);
      if (params.filter) {
        this.filterGender = params.filter;
        if (params.filter === 'male' || params.filter === 'female') {
          this.randomUser.getRandomContacts(10,params.filter).subscribe({
            next: (response: Results) => {
              response.results.forEach(
                (randomContact: IRandomContact, index: number) => {
                  this.randomContactList.push(randomContact);
                }
              );
              console.table(this.randomContactList);
            },
            error: (error) => {
              `${error}`;
            },
            complete: () => {
              console.log('Query n and gender contacts completed');
            },
          });

        } else {
          //Get random contact list from our service
          this.randomUser.getRandomContacts(10).subscribe({
            next: (response: Results) => {
              response.results.forEach(
                (randomContact: IRandomContact, index: number) => {
                  this.randomContactList.push(randomContact);
                }
              );
              console.table(this.randomContactList);
            },
            error: (error) => {
              `${error}`;
            },
            complete: () => {
              console.log('Query n contacts completed');
            },
          });
        }
      }

      // //Get contact list from our service
      //  this.contactService.getContacts(this.filterGender).then((contacts: IContact[]) => this.contactList=contacts)
      //  .catch((error: any) => {
      //    console.log('Error:', error);
      // }).finally(() => console.info('Contacts request completed'));
    });
  }

  //Example of passing info betwween components by state
  backToHome(contact: IRandomContact) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: contact,
      },
    };
    this.router.navigate(['/dashboard'], navigationExtras);
  }
}
