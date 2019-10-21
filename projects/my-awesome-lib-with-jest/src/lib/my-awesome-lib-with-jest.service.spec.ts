import { TestBed } from '@angular/core/testing';

import { MyAwesomeLibWithJestService } from './my-awesome-lib-with-jest.service';

describe('MyAwesomeLibWithJestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAwesomeLibWithJestService = TestBed.get(MyAwesomeLibWithJestService);
    expect(service).toBeTruthy();
  });
});
