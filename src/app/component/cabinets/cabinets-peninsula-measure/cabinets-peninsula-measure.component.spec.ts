import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetsPeninsulaMeasureComponent } from './cabinets-peninsula-measure.component';

describe('CabinetsPeninsulaMeasureComponent', () => {
  let component: CabinetsPeninsulaMeasureComponent;
  let fixture: ComponentFixture<CabinetsPeninsulaMeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetsPeninsulaMeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetsPeninsulaMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
