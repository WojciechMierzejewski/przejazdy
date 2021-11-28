import { TestBed } from '@angular/core/testing';
import { TransitService } from './transit.service';


describe('RoutesService', () => {
  let service: TransitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
