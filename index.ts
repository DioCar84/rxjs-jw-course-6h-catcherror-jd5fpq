import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const failingHttpRequest$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error(new Error('Timeout'));
  }, 3000);
});

console.log('App started');

// failingHttpRequest$
//   .pipe(catchError((err) => of('Fallback value')))
//   .subscribe((value) => console.log(value));

failingHttpRequest$.pipe(catchError((err) => EMPTY)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});
