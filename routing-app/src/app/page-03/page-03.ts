import { Component, input, Input, Signal } from '@angular/core';

@Component({
  selector: 'app-page-03',
  imports: [],
  templateUrl: './page-03.html',
  styleUrl: './page-03.css',
})
export class Page03 {

  firstName: Signal<string> = input('toto');
  // firstName:Signal<string> = input('toto',{transform: (v)=> v || 'default'});
}
