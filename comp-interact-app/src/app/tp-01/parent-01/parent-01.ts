import { Component } from '@angular/core';
import { Child01 } from '../child-01/child-01';

@Component({
  selector: 'app-parent-01',
  imports: [Child01],
  templateUrl: './parent-01.html',
  styleUrl: './parent-01.css',
})
export class Parent01 {
  counterValue = 0;

  click() {
    this.counterValue++;
  }
}
