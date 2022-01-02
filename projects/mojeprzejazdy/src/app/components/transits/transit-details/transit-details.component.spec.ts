import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitDetailsComponent } from './transit-details.component';

describe('TransitDetailsComponent', () => {
  let component: TransitDetailsComponent;
  let fixture: ComponentFixture<TransitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
