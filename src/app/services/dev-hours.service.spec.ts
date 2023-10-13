import { TestBed } from '@angular/core/testing';
import { DevHoursService } from './dev-hours.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DevHoursService', () => {
  let service: DevHoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientTestingModule]});
    service = TestBed.inject(DevHoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
