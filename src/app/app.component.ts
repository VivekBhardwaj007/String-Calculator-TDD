import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';

  add(numbers: string) {
    let result: number;
    let addition_array = numbers.replace(/\r?\n/g, ',').split(',').map(Number);

    if (addition_array.some((value) => value < 0)) {
      throw new Error('Negatives not allowed!');
    }

    if (numbers === '') {
      return 0;
    } else if (numbers.length === 1) {
      result = parseInt(numbers);
    } else {
      result = addition_array.reduce((a, b) => a + b);
    }

    return result;
  }
}
