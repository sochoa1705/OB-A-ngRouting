import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../models/contact.interface';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: IContact, ...args: unknown[]): unknown {
    return `${value.name} ${value.lastname}`;
  }

}
