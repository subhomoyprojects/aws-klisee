import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetsLocationComponent } from './cabinets-location.component';

describe('CabinetsLocationComponent', () => {
  let component: CabinetsLocationComponent;
  let fixture: ComponentFixture<CabinetsLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetsLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
