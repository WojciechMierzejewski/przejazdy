import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransitsComponent } from './transits.component';


describe('RoutesComponent', () => {
  let component: TransitsComponent;
  let fixture: ComponentFixture<TransitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransitsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
