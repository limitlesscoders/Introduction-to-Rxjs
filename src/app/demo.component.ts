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

      <button mat-raised-button (click)="createSubject()">
      Subject
    </button>

    <button mat-raised-button (click)="createReplaySubject()">
      Replay Subject
    </button>

    <button mat-raised-button (click)="createBehaviorSubject()">
      Behavior Subject
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
      observer.next('Message 3');
    });

    //observable.next("444");
    observable.subscribe((value) => {
      console.log('Observer data', value);
    });
  }

  createSubject() {
    let subject = new Subject();
    subject.next('Missed Message');
    subject.subscribe((value) => {
      console.log('Subject data', value);
    });
    subject.next('New Message 1');
    subject.next('New Message 2');
    subject.unsubscribe();
  }

  createReplaySubject() {
    let replaySubject = new ReplaySubject();
    replaySubject.next('This message was caught because of replay');
    replaySubject.next('This message was caught not once but twice');
    replaySubject.next('This message was caught not once but thrice');
    replaySubject.subscribe((value) => {
      console.log('Replay Subject data', value);
    });
    replaySubject.next('Hello world!');
    replaySubject.unsubscribe();
  }

  createBehaviorSubject() {
    let behaviorSubject = new BehaviorSubject(
      'This mesage has some deafult value'
    );

    behaviorSubject.subscribe((value) => {
      console.log('Behavior Subject data', value);
    });
    console.log('First message', behaviorSubject.getValue());
    behaviorSubject.next('Second message');
    behaviorSubject.unsubscribe();
  }
}
