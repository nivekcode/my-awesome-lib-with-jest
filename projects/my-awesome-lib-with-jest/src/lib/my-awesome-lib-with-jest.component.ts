import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-awesome-lib-with-jest',
  template: `
    <p>
      my-awesome-lib-with-jest works!
    </p>
  `,
  styles: []
})
export class MyAwesomeLibWithJestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
