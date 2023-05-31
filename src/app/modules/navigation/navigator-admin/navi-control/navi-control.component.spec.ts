import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviControlComponent } from './navi-control.component';

describe('NaviControlComponent', () => {
  let component: NaviControlComponent;
  let fixture: ComponentFixture<NaviControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaviControlComponent]
    });
    fixture = TestBed.createComponent(NaviControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
