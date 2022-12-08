import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureV2ConfigComponent } from './feature-v2-config.component';

describe('FeatureV2ConfigComponent', () => {
  let component: FeatureV2ConfigComponent;
  let fixture: ComponentFixture<FeatureV2ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureV2ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureV2ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
