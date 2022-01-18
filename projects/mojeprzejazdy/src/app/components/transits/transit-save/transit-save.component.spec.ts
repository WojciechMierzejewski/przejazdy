import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitSaveComponent } from './transit-save.component';

describe('TransitSaveComponent', () => {
  let component: TransitSaveComponent;
  let fixture: ComponentFixture<TransitSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
