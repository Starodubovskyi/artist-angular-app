import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderV5Component } from './header-v5.component';

describe('HeaderV5Component', () => {
  let component: HeaderV5Component;
  let fixture: ComponentFixture<HeaderV5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderV5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
