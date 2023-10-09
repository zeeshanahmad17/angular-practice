import { Component } from '@angular/core';
// Observable
import { Observable, Subscription, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  mySubscription: Subscription;
  users = [
    {
      id: 1,
      name: 'Max',
    },
    {
      id: 2,
      name: 'Anna',
    },
    {
      id: 3,
      name: 'Chris',
    },
  ];

  // -------------- Observables Practice ---------------------
  ngOnInit() {
    // this.mySubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    //   count++;
    // });

    const customObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
        if (count === 7) {
          observer.complete();
        }
        if (count > 5) {
          observer.error(new Error('Max number has been reached'));
        }
      }, 1000);
    });

    this.mySubscription = customObservable
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data) => {
          return `round: ${data}`;
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          console.log('completed');
        }
      );
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
