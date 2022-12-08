import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterV4Component } from './footer-v4.component';

describe('FooterV4Component', () => {
  let component: FooterV4Component;
  let fixture: ComponentFixture<FooterV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
