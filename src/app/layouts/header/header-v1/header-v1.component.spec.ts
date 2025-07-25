import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderV1Component } from './header-v1.component';

describe('HeaderV1Component', () => {
  let component: HeaderV1Component;
  let fixture: ComponentFixture<HeaderV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
