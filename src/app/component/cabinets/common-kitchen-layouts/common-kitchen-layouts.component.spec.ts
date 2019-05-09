import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonKitchenLayoutsComponent } from './common-kitchen-layouts.component';

describe('CommonKitchenLayoutsComponent', () => {
  let component: CommonKitchenLayoutsComponent;
  let fixture: ComponentFixture<CommonKitchenLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonKitchenLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonKitchenLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
