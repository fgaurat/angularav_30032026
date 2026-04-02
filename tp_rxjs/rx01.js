import { interval, map, take, tap } from "rxjs";

console.log("avant");

// interval(500).pipe(
//     take(5),
//     tap(d => console.log("tap avant",d)),
//     map(d => d * 10),
//     tap(d => console.log("tap après",d))
// ).subscribe(console.log);

// let obs$ = interval(500)
// obs$.pipe(
//     take(5),
//     tap(d => console.log("tap avant",d)),
//     map(d => d * 10),
//     tap(d => console.log("tap après",d))
// ).subscribe(console.log);

let obs$ = interval(500);

obs$ = obs$.pipe(take(10));

obs$.subscribe((d) => console.log("ob1", d));
obs$.subscribe((d) => console.log("ob2", d));

setTimeout(() => {
  obs$.subscribe((d) => console.log("ob3", d));
}, 1000);

console.log("après");
