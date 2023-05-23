import { TestBed } from '@angular/core/testing';

import { RecervaService } from './recerva.service';

describe('RecervaService', () => {
  let service: RecervaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecervaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
