import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetsFloorPlanComponent } from './cabinets-floor-plan.component';

describe('CabinetsFloorPlanComponent', () => {
  let component: CabinetsFloorPlanComponent;
  let fixture: ComponentFixture<CabinetsFloorPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetsFloorPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetsFloorPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
