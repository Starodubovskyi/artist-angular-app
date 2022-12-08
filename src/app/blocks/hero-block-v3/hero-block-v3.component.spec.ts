import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBlockV3Component } from './hero-block-v3.component';

describe('HeroBlockV3Component', () => {
  let component: HeroBlockV3Component;
  let fixture: ComponentFixture<HeroBlockV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBlockV3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBlockV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
