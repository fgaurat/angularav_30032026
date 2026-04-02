import { Injectable, signal, Signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountSignal {

  private readonly counter:WritableSignal<number> = signal(0)
  readonly count:Signal<number> = this.counter.asReadonly()

  // get count(){
  //   return this.counter.asReadonly()
  // }

  inc(){
    this.counter.update(v => v+1)
  }



}
