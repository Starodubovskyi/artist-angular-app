import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroV3ConfigComponent } from './hero-v3-config.component';

describe('HeroV3ConfigComponent', () => {
  let component: HeroV3ConfigComponent;
  let fixture: ComponentFixture<HeroV3ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroV3ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroV3ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
