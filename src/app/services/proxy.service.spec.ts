import { TestBed } from '@angular/core/testing';
import { ProxyService } from './proxy.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProxyService', () => {
  let service: ProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientTestingModule]});
    service = TestBed.inject(ProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
