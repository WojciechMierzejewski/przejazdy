import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitAddressesComponent } from './transit-addresses.component';

describe('TransitAddressesComponent', () => {
  let component: TransitAddressesComponent;
  let fixture: ComponentFixture<TransitAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
