import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureV6ConfigComponent } from './feature-v6-config.component';

describe('FeatureV6ConfigComponent', () => {
  let component: FeatureV6ConfigComponent;
  let fixture: ComponentFixture<FeatureV6ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureV6ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureV6ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
