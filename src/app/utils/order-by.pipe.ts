import { Pipe, PipeTransform } from '@angular/core';

import { Leader } from '../models/leader';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
  transform(array: Array<Leader>, orderField: string, orderType: boolean): Array<Leader> {
    if (array) {
      array.sort((a: Leader, b: Leader) => {
        const first = a[orderField];
        const second = b[orderField];
        let result;
        if (first < second) {
          result = 1;
        } else if (first > second) {
          result = -1;
        } else {
          result = 0;
        }
        return orderType ? result : -1 * result;
      });
    }
    return array;
  }
}
