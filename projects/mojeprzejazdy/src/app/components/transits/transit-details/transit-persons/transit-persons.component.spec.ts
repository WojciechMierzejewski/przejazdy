import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitPersonsComponent } from './transit-persons.component';

describe('TransitPersonsComponent', () => {
  let component: TransitPersonsComponent;
  let fixture: ComponentFixture<TransitPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitPersonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
