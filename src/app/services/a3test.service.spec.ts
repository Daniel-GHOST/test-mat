import { TestBed } from '@angular/core/testing';

import { A3testService } from './a3test.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('A3testService', () => {
  let service: A3testService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientTestingModule]});
    service = TestBed.inject(A3testService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
