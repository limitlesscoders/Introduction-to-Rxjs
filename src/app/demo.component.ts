import { Component, Input, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  timer,
  of,
  combineLatest,
  from,
} from 'rxjs';
import {
  map,
  mergeMap,
  switchMap,
  delay,
  debounceTime,
  distinctUntilKeyChanged,
} from 'rxjs/operators';
@Component({
  selector: 'demo',
  template: `
    <h1>RxJs in Angular</h1>
    <div>
      <h4>Introduction to RxJs</h4>
      <button mat-raised-button (click)="createObservable()">
        Observables
      </button>
    </div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
      button {
        margin: 15px;
      }
    `,
  ],
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Difference between an observable and a subject
    // Observable -
    // Observable in simple word is a stram of data [1, 2, 3,...]
    // They are cold/lazy meaning they won't emit values until they are subscribed to
    // Observables is for the consumers, it can be transformed and subscribed
  }

  createObservable() {
    let observable = new Observable((observer) => {
      observer.next('Message 1');
      observer.next('Message 2');
      observer.next('MEssage 3');
    });

    //observable.next("444");
    observable.subscribe((value) => {
      console.log('Observer data', value);
    });
  }
}
