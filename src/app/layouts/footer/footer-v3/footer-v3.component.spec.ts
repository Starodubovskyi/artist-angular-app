import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterV3Component } from './footer-v3.component';

describe('FooterV3Component', () => {
  let component: FooterV3Component;
  let fixture: ComponentFixture<FooterV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterV3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
