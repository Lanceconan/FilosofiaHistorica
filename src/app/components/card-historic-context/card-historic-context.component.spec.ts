import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoricContextComponent } from './card-historic-context.component';

describe('CardHistoricContextComponent', () => {
  let component: CardHistoricContextComponent;
  let fixture: ComponentFixture<CardHistoricContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHistoricContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHistoricContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
