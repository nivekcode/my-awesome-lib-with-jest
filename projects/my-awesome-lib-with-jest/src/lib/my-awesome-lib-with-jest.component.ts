import { Component, OnInit } from '@angular/core';
import {MyAwesomeLibWithJestService} from './my-awesome-lib-with-jest.service';

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

  public foo;

  constructor(private service: MyAwesomeLibWithJestService) {
    this.foo = service.bar;
  }

  ngOnInit() {
  }

}
