import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoricalContextComponent } from './view-historical-context.component';

describe('ViewHistoricalContextComponent', () => {
  let component: ViewHistoricalContextComponent;
  let fixture: ComponentFixture<ViewHistoricalContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHistoricalContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistoricalContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
