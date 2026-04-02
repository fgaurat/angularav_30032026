import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-01',
  imports: [],
  templateUrl: './child-01.html',
  styleUrl: './child-01.css',
})
export class Child01 {

  @Input("count")
  counterValue=0
}
