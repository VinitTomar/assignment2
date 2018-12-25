import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleDigitService {

  constructor() { }

  getDigit(str) {
    let digit;
    switch(str) {
      case ' _ | ||_|':
        digit = 0;
      break; 

      case '     |  |':
        digit = 1;
      break;

      case ' _  _||_ ':
        digit = 2;
      break;

      case ' _  _| _|':
        digit = 3;
      break;

      case '   |_|  |':
        digit = 4;
      break;

      case ' _ |_  _|':
        digit = 5;
      break;

      case ' _ |_ |_|':
        digit = 6;
      break;

      case ' _   |  |':
        digit = 7;
      break;

      case ' _ |_||_|':
        digit = 8;
      break;

      case ' _ |_| _|':
      digit = 9;
      break;
    }
    return digit;
  }
}
