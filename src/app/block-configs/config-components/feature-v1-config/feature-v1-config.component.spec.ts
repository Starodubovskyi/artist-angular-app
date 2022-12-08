import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureV1ConfigComponent } from './feature-v1-config.component';

describe('FeatureV1ConfigComponent', () => {
  let component: FeatureV1ConfigComponent;
  let fixture: ComponentFixture<FeatureV1ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureV1ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureV1ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
