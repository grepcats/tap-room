import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "under10",
  pure: false
})
export class Under10Pipe implements PipeTransform {
  transform(input: Keg[], displayOption) {
    let output: Keg[] = [];
    if(displayOption === "under10Kegs") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].pints <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (displayOption === "allKegs") {
      return input;
    } else {
      return input;
    }
  }
}
