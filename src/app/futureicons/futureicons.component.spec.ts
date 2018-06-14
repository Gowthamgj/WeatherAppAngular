import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureiconsComponent } from './futureicons.component';

describe('FutureiconsComponent', () => {
  let component: FutureiconsComponent;
  let fixture: ComponentFixture<FutureiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
