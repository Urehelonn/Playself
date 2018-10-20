import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingPanelComponent } from './following-panel.component';

describe('FollowingPanelComponent', () => {
  let component: FollowingPanelComponent;
  let fixture: ComponentFixture<FollowingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
