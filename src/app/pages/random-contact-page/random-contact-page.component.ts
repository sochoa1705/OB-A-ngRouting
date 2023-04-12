import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
//import the interface
import { IRandomContact, Results } from '../../models/randomuser';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.css']
})
export class RandomCotactPageComponent implements OnInit {

  contact: IRandomContact | undefined;

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit(){
    this.randomUserService.getRandomContact().subscribe((response: Results) => {
      this.contact = response.results[0];
      console.table(this.contact.name);
    });
  }

  getNewContact() {
   
    this.randomUserService.getRandomContact().subscribe({
      next: (response: Results) => {
        this.contact = response.results[0];
      },
      error: (error) => {`${error}`},
      complete: () => {console.log('Query completed')}
    })
  }

  //get contact list method
  getContactList(n: number){
    this.randomUserService.getRandomContacts(n).subscribe({
      next: (response: Results) => {
        console.table(response.results);
      },
      error: (error) => {`${error}`},
      complete: () => {console.log('Query n contacts completed')}
    })
  }
  //GET contact list by gender method
  getContactByGender(gender:string){
    this.randomUserService.getRandomContactsByGender(gender).subscribe({
      next: (response: Results) => {
        console.table(response.results);
      },
      error: (error) => {`${error}`},
      complete: () => {console.log('Query by gender completed')}
    
    })

  }


  



}
