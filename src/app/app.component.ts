import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // START : Regular Expression for replacing seperators
  regularExpression(regExpString: any) {
    regExpString = regExpString.replace(
      /[\-\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
      '\\$&'
    );

    // Replacing
    // '][' -> |
    // | -> ''
    return regExpString.replace('][', '|').replace(/\[|\]/g, '');
  }
  // END : Regular Expression for replacing seperators

  // START : Extrating integer values
  extractIntegerValues(input: any) {
    // initialize variable
    let numbers = input;

    // Defining delimiter
    let delimiter = /[,\n]/;

    // checking input start with '//'
    if (input.startsWith('//')) {
      // Updating delimiter with new regular expression
      delimiter = new RegExp(
        this.regularExpression(input.split('\n').shift().substr(2))
      );
      numbers = input.replace(/^\/\/.+\n/, '');
    }

    // START : converting value in to numbers
    // spliting values using delimiter
    // using map function converting values in numbers
    let integerValues = numbers.split(delimiter).map(function (value: any) {
      // value conversion
      let integerValue = parseInt(value);

      return integerValue;
    });

    // returning final all values
    return integerValues;
  }
  // END : Extrating integer values

  // START : add function for addition which will accept -
  // 1. String Numbers
  // 2. No negative number
  add(numbers: string) {
    // String conversion
    // 1. Removing enter with comma ',', '*' etc etc
    // 2. Spliting all numbers with comma ','
    // 3. Converting all string numbers into 'Numnber'
    // 4. Assignning data into a variable
    let addition_array = this.extractIntegerValues(numbers);

    // Checking array using 'some' method where it will return true or false.
    if (addition_array.some((value: number) => value < 0)) {
      // Throwing a error for Negative number.
      throw new Error('Negatives not allowed!');
    }

    // checking if there any blank string
    // It should return 0
    if (!numbers || numbers === '') {
      return 0;
    } else {
      // Returning addition of every value
      return addition_array.reduce((a: any, b: any) => a + b);
    }
  }
  // END : add function for addition
}
