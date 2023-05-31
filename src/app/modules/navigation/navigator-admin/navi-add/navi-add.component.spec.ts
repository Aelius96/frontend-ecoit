import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviAddComponent } from './navi-add.component';

describe('NaviAddComponent', () => {
  let component: NaviAddComponent;
  let fixture: ComponentFixture<NaviAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaviAddComponent]
    });
    fixture = TestBed.createComponent(NaviAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
