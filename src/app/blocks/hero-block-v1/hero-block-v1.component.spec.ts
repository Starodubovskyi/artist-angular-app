import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBlockV1Component } from './hero-block-v1.component';

describe('HeroBlockV1Component', () => {
  let component: HeroBlockV1Component;
  let fixture: ComponentFixture<HeroBlockV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBlockV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBlockV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
