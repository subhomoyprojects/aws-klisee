import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCostComponent } from './material-cost.component';

describe('MaterialCostComponent', () => {
  let component: MaterialCostComponent;
  let fixture: ComponentFixture<MaterialCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
