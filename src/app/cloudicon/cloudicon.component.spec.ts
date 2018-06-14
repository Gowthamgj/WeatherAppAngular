import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudiconComponent } from './cloudicon.component';

describe('CloudiconComponent', () => {
  let component: CloudiconComponent;
  let fixture: ComponentFixture<CloudiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
