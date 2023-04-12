import { Component, Input, OnInit } from '@angular/core';
//import the service
import { RandomUserService } from '../../services/random-user.service';
//import the interface
import { IRandomContact, Results } from '../../models/randomuser';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {
  
  //add the input decorator
  @Input() randomContact: IRandomContact | undefined;

  constructor() { }

  ngOnInit() {
  }



}
