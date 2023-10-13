import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StddevComponent } from './stddev.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MediaComponent } from '../media/media.component';
import { ProxyService } from '../services/proxy.service';
import { DevHoursService } from '../services/dev-hours.service';
import { of } from 'rxjs';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let service1: ProxyService;
  let service2: DevHoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StddevComponent],
      imports: [HttpClientTestingModule],
      providers: [MediaComponent],
    });
    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    service1 = TestBed.inject(ProxyService);
    service2 = TestBed.inject(DevHoursService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return 572.03 with', () => {
    const ejemplo = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    spyOn(service1, 'getData').and.returnValue(of(ejemplo));
    component.ngOnInit();
    //const dataarray = component.getDataArray(1);
    expect(component.desvest(component.data1)).toBe(572.03);
  });

  it('Should return 62.26 with the second option', () => {
    const ejemplo = [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ];
    spyOn(service2, 'getData').and.returnValue(of(ejemplo));
    component.ngOnInit();
    //const dataarray = component.getDataArray(2);
    expect(component.desvest(component.data2)).toBe(62.26);
  });
});
