import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToStars'
})
export class NumberToStarsPipe implements PipeTransform {
  /**
   * Returns from a number to a string representing the numbers of
   * stars with emote
   */
  transform(value: number): string {

    let allStars: string = "";

    for (let i = 0; i < value; i++) {
      allStars += "⭐"
    }

    return allStars;
  }

}
