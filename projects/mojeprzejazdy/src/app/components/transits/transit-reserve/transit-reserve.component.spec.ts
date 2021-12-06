import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitReserveComponent } from './transit-reserve.component';

describe('TransitReserveComponent', () => {
  let component: TransitReserveComponent;
  let fixture: ComponentFixture<TransitReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitReserveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
