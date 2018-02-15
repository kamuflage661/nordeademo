import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentTableComponentComponent } from './investment-table-component';

describe('InvestmentTableComponentComponent', () => {
  let component: InvestmentTableComponentComponent;
  let fixture: ComponentFixture<InvestmentTableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentTableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
