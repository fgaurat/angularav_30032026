import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('hello-world');

  firstName: string = "Fred";

  onChangeValue(e: Event) {
    const input = e.target as HTMLInputElement;
    this.firstName = input.value;
  }

}



