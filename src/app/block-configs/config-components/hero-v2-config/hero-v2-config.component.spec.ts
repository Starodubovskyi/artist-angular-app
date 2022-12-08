import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroV2ConfigComponent } from './hero-v2-config.component';

describe('HeroV2ConfigComponent', () => {
  let component: HeroV2ConfigComponent;
  let fixture: ComponentFixture<HeroV2ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroV2ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroV2ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
