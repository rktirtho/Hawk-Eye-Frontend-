import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedAccessComponent } from './authorized-access.component';

describe('AuthorizedAccessComponent', () => {
  let component: AuthorizedAccessComponent;
  let fixture: ComponentFixture<AuthorizedAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
