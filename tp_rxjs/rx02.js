import { interval, map, share, take, tap } from "rxjs";


let obs$ = interval(500);

obs$ = obs$.pipe(
  take(10),
  share()
);

obs$.subscribe((d) => console.log("ob1", d));
obs$.subscribe((d) => console.log("ob2", d));

setTimeout(() => {
  obs$.subscribe((d) => console.log("ob3", d));
}, 1000);

