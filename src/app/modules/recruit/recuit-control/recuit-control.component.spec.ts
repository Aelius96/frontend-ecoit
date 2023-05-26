import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuitControlComponent } from './recuit-control.component';

describe('RecuitControlComponent', () => {
  let component: RecuitControlComponent;
  let fixture: ComponentFixture<RecuitControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuitControlComponent]
    });
    fixture = TestBed.createComponent(RecuitControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
