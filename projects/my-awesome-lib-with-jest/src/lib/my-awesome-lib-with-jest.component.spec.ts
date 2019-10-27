import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyAwesomeLibWithJestComponent} from './my-awesome-lib-with-jest.component';
import {MyAwesomeLibWithJestService} from './my-awesome-lib-with-jest.service';

describe('MyAwesomeLibWithJestComponent', () => {
  let component: MyAwesomeLibWithJestComponent;
  let fixture: ComponentFixture<MyAwesomeLibWithJestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyAwesomeLibWithJestComponent],
      providers: [
        {
          provide: MyAwesomeLibWithJestService, useValue: {
            bar: 'foo'
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAwesomeLibWithJestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign the bar propert to foo', () => {
    expect(component.foo).toBe('foo');
  });
});
