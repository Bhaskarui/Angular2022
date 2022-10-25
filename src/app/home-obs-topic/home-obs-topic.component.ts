import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-home-obs-topic',
  templateUrl: './home-obs-topic.component.html',
  styleUrls: ['./home-obs-topic.component.css']
})
export class HomeObsTopicComponent implements OnInit, OnDestroy {
  subscription?: Subscription
  constructor() { }

  ngOnInit(): void {
    //  this.subscription= interval(1000).subscribe((count:number) =>{
    //     console.log(count)
    //   });

    let customObservalInterval = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error('Cont is greater than 3')
        }
        count++;
      }, 1000);
    })
    this.subscription = customObservalInterval.pipe(filter((data:number)=>{
      return data>0
    }),map((data: number) => {
      return 'Round:' + (data + 1)
    })).subscribe((data: any) => {
      console.log(data);
    }, (err: Error) => {
      console.log(err);
      alert(err.message)
    }, () => {
      console.log('completed');
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
