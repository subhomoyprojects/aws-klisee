import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountertopDetailsComponent } from './countertop-details.component';

describe('CountertopDetailsComponent', () => {
  let component: CountertopDetailsComponent;
  let fixture: ComponentFixture<CountertopDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountertopDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountertopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
