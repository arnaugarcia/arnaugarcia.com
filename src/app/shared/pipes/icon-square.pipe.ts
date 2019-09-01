import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconSquare'
})
export class IconSquarePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
