import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ProxyService } from '../services/proxy.service';
import { DevHoursService } from '../services/dev-hours.service';
import { of } from 'rxjs';


describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let service1:ProxyService;
  let service2:DevHoursService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    service1 = TestBed.inject(ProxyService);
    service2 = TestBed.inject(DevHoursService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return 550.6 with firs option',()=> {
      const ejemplo=[160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    spyOn(service1, 'getData').and.returnValue(of(ejemplo))
    component.ngOnInit();
      const dataarray=(component.getDataArray(1));
      expect(component.media(dataarray)).toBe(550.6);
  });

  it('Should return 60.32 with the second option',() => {
    const ejemplo=[15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    spyOn(service2, 'getData').and.returnValue(of(ejemplo))
    component.ngOnInit();
    const dataarray = component.getDataArray(2);
    expect(component.media(dataarray)).toBe(60.32);
  });
});
