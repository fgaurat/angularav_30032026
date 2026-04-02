import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-02',
  imports: [],
  templateUrl: './child-02.html',
  styleUrl: './child-02.css',
})
export class Child02 {

  @Output()
  incremented:EventEmitter<number> = new EventEmitter();

  increment(){
    this.incremented.emit(12)
  }

}
