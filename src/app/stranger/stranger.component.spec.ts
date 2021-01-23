import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrangerComponent } from './stranger.component';

describe('StrangerComponent', () => {
  let component: StrangerComponent;
  let fixture: ComponentFixture<StrangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
