import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBlockV2Component } from './hero-block-v2.component';

describe('HeroBlockV2Component', () => {
  let component: HeroBlockV2Component;
  let fixture: ComponentFixture<HeroBlockV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBlockV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBlockV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
