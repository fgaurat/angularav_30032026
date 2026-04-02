import { Component } from '@angular/core';
import { Child02 } from "../child-02/child-02";

@Component({
  selector: 'app-parent-02',
  imports: [Child02],
  templateUrl: './parent-02.html',
  styleUrl: './parent-02.css',
})
export class Parent02 {
  counterValue = 0

  increment(n:number){
    this.counterValue++
  }
}
