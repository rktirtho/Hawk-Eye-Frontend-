import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthrizedAccessComponent } from './unauthrized-access.component';

describe('UnauthrizedAccessComponent', () => {
  let component: UnauthrizedAccessComponent;
  let fixture: ComponentFixture<UnauthrizedAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthrizedAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthrizedAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
