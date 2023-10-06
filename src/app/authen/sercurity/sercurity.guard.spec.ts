import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sercurityGuard } from './sercurity.guard';

describe('sercurityGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sercurityGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
