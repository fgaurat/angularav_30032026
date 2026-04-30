import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Counter } from "./counter/counter";

@Component({
  selector: 'app-root',
  imports: [FormsModule, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('hello-world');

  showCounter: boolean = true;

  firstName: string = "Fred";

  onChangeValue(e: Event) {
    const input = e.target as HTMLInputElement;
    this.firstName = input.value;
  }

  

}



