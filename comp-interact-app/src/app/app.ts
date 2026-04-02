import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child01 } from "./tp-01/child-01/child-01";
import { Parent01 } from "./tp-01/parent-01/parent-01";
import { Parent02 } from "./tp-02/parent-02/parent-02";
import { Parent03 } from "./tp-03/parent-03/parent-03";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child01, Parent01, Parent02, Parent03],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('comp-interact-app');
}
