import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../models/contact.interface';
import { IRandomContact } from '../models/randomuser';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: IRandomContact, ...args: unknown[]): unknown {
    return `${value.name.title} ${value.name.first} ${value.name.last}`;
  }

}
