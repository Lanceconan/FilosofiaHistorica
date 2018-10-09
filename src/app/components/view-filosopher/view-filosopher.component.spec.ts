import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFilosopherComponent } from './view-filosopher.component';

describe('ViewFilosopherComponent', () => {
  let component: ViewFilosopherComponent;
  let fixture: ComponentFixture<ViewFilosopherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFilosopherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFilosopherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
