import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShortner'
})
export class TextShortnerPipe implements PipeTransform {

  transform(longText:string, threshold=10): string {
    if (longText.length < threshold) {
      return longText;
    }
    return longText.slice(0, threshold) + '...';
  }

}
