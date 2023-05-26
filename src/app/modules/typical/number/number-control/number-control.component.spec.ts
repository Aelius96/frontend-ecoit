import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberControlComponent } from './number-control.component';

describe('NumberControlComponent', () => {
  let component: NumberControlComponent;
  let fixture: ComponentFixture<NumberControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberControlComponent]
    });
    fixture = TestBed.createComponent(NumberControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
