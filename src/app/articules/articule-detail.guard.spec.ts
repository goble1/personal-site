import { TestBed } from '@angular/core/testing';

import { ArticuleDetailGuard } from './articule-detail.guard';

describe('ArticuleDetailGuard', () => {
  let guard: ArticuleDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ArticuleDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
