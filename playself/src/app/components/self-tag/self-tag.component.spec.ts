import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfTagComponent } from './self-tag.component';

describe('SelfTagComponent', () => {
  let component: SelfTagComponent;
  let fixture: ComponentFixture<SelfTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
