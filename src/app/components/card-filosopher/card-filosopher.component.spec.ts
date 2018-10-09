import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilosopherComponent } from './card-filosopher.component';

describe('CardFilosopherComponent', () => {
  let component: CardFilosopherComponent;
  let fixture: ComponentFixture<CardFilosopherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFilosopherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFilosopherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
