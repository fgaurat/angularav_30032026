import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { interval, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter implements OnDestroy,OnInit{
  count_1 = signal(0);
  count_2 = signal(0);
  private destroy$ = new Subject<void>();


  ngOnInit(): void {
    console.log("Counter component initialized");

    interval(1000).pipe(
      takeUntil(this.destroy$)
    ).subscribe((value) => {
      this.count_1.update((current) => current + 1) ;
    });

    interval(200).pipe(
      takeUntil(this.destroy$)
    ).subscribe((value) => {
      this.count_2.update((current) => current + 1) ;
    });
  }


  ngOnDestroy(): void {
   console.log("Counter component destroyed");
   this.destroy$.next();
   this.destroy$.complete();
  }


}
