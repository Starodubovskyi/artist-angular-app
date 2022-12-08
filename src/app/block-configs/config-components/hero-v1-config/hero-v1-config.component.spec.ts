import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroV1ConfigComponent } from './hero-v1-config.component';

describe('HeroV1ConfigComponent', () => {
  let component: HeroV1ConfigComponent;
  let fixture: ComponentFixture<HeroV1ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroV1ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroV1ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
