import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inc } from "./inc/inc";
import { Show } from "./show/show";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Inc, Show],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('signal-counter-app');
  readonly count:WritableSignal<number> = signal(0);
  readonly doubleCount: Signal<number> = computed(() => this.count() * 2);

  setTo12() {
    this.count.set(12);
  }

  inc() {
    // Increment the count by 1.
    this.count.update((value) => value + 1);
  }

  constructor(){
    effect(()=>{
      console.log(`count: ${this.count()}`);
      // console.log(`count: ${this.doubleCount()}`);

    })
  }
}
