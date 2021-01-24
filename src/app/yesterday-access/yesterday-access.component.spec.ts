import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesterdayAccessComponent } from './yesterday-access.component';

describe('YesterdayAccessComponent', () => {
  let component: YesterdayAccessComponent;
  let fixture: ComponentFixture<YesterdayAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesterdayAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesterdayAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
