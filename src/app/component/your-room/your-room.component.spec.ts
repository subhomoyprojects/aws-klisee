import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourRoomComponent } from './your-room.component';

describe('YourRoomComponent', () => {
  let component: YourRoomComponent;
  let fixture: ComponentFixture<YourRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
