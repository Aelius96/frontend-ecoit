import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusotmerControlComponent } from './cusotmer-control.component';

describe('CusotmerControlComponent', () => {
  let component: CusotmerControlComponent;
  let fixture: ComponentFixture<CusotmerControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CusotmerControlComponent]
    });
    fixture = TestBed.createComponent(CusotmerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
