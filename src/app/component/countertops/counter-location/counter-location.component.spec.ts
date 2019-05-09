import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterLocationComponent } from './counter-location.component';

describe('CounterLocationComponent', () => {
  let component: CounterLocationComponent;
  let fixture: ComponentFixture<CounterLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
