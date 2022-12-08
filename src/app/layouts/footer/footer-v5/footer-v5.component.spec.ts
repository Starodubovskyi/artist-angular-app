import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterV5Component } from './footer-v5.component';

describe('FooterV5Component', () => {
  let component: FooterV5Component;
  let fixture: ComponentFixture<FooterV5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterV5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
