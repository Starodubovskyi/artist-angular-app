import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImageFullBlockComponent } from './hero-image-full-block.component';

describe('HeroImageFullBlockComponent', () => {
  let component: HeroImageFullBlockComponent;
  let fixture: ComponentFixture<HeroImageFullBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroImageFullBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroImageFullBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
