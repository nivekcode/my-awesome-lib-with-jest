import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAwesomeLibWithJestComponent } from './my-awesome-lib-with-jest.component';

describe('MyAwesomeLibWithJestComponent', () => {
  let component: MyAwesomeLibWithJestComponent;
  let fixture: ComponentFixture<MyAwesomeLibWithJestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAwesomeLibWithJestComponent ]
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
});
