import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { decrement, increment, incrementBy, reset } from '../counter.actions';




@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ngrx-counter-app');



  store = inject(Store)
  count$: Observable<{value:number}> = this.store.select(state => state.theCounter)


  increment() {
    this.store.dispatch(increment())
  }

  incrementBy() {
    this.store.dispatch(incrementBy(12))
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
