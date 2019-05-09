import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardMaterialCostComponent } from './standard-material-cost.component';

describe('StandardMaterialCostComponent', () => {
  let component: StandardMaterialCostComponent;
  let fixture: ComponentFixture<StandardMaterialCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardMaterialCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardMaterialCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
