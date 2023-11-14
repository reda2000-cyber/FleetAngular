import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstNamePipe'
})
export class FirstNamePipe implements PipeTransform {

  transform(value: string | undefined): string {
    if(value) return value.charAt(0).toUpperCase()+value.substring(1).toLocaleLowerCase();
    else return "";
  }

}
