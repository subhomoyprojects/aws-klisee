import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountertopsComponent } from './countertops.component';

describe('CountertopsComponent', () => {
  let component: CountertopsComponent;
  let fixture: ComponentFixture<CountertopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountertopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountertopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
