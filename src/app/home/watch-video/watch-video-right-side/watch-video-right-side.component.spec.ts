import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchVideoRightSideComponent } from './watch-video-right-side.component';

describe('WatchVideoRightSideComponent', () => {
  let component: WatchVideoRightSideComponent;
  let fixture: ComponentFixture<WatchVideoRightSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchVideoRightSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchVideoRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
