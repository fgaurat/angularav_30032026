import { Component, ViewChild } from '@angular/core';
import { Child01 } from "../../tp-01/child-01/child-01";
import { Child03 } from "../child-03/child-03";

@Component({
  selector: 'app-parent-03',
  imports: [Child01, Child03],
  templateUrl: './parent-03.html',
  styleUrl: './parent-03.css',
})
export class Parent03 {

  @ViewChild("theOtherCounter")
  childComponent?:Child03

  incrementFromParent(){
    this.childComponent?.increment()
  }
}
