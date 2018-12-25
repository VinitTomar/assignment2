import { TestBed } from '@angular/core/testing';

import { SingleDigitService } from './single-digit.service';

describe('SingleDigitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleDigitService = TestBed.get(SingleDigitService);
    expect(service).toBeTruthy();
  });
});
