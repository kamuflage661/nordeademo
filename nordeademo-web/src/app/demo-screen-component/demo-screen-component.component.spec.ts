import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoScreenComponentComponent } from './demo-screen-component.component';

describe('DemoScreenComponentComponent', () => {
  let component: DemoScreenComponentComponent;
  let fixture: ComponentFixture<DemoScreenComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoScreenComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoScreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
