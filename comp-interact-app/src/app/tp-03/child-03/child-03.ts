import { Component } from '@angular/core';

@Component({
  selector: 'app-child-03',
  imports: [],
  templateUrl: './child-03.html',
  styleUrl: './child-03.css',
})
export class Child03 {
  counterValue=0


  increment(){
    this.counterValue++
  }
}
