import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderV4Component } from './header-v4.component';

describe('HeaderV4Component', () => {
  let component: HeaderV4Component;
  let fixture: ComponentFixture<HeaderV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
