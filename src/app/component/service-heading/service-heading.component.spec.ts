import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHeadingComponent } from './service-heading.component';

describe('ServiceHeadingComponent', () => {
  let component: ServiceHeadingComponent;
  let fixture: ComponentFixture<ServiceHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
