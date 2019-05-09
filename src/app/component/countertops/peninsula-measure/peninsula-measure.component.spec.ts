import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeninsulaMeasureComponent } from './peninsula-measure.component';

describe('PeninsulaMeasureComponent', () => {
  let component: PeninsulaMeasureComponent;
  let fixture: ComponentFixture<PeninsulaMeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeninsulaMeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeninsulaMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
