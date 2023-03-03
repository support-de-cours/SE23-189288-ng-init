import { TestBed } from '@angular/core/testing';

import { LockerGuard } from './locker.guard';

describe('LockerGuard', () => {
  let guard: LockerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LockerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
