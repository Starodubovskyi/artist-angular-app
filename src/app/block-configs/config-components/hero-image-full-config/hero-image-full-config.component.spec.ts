import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImageFullConfigComponent } from './hero-image-full-config.component';

describe('HeroImageFullConfigComponent', () => {
  let component: HeroImageFullConfigComponent;
  let fixture: ComponentFixture<HeroImageFullConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroImageFullConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroImageFullConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
