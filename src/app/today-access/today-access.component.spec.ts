import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayAccessComponent } from './today-access.component';

describe('TodayAccessComponent', () => {
  let component: TodayAccessComponent;
  let fixture: ComponentFixture<TodayAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
