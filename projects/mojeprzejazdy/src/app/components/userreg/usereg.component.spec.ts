import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseregComponent } from './usereg.component';

describe('UseregComponent', () => {
  let component: UseregComponent;
  let fixture: ComponentFixture<UseregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
