import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureV4ConfigComponent } from './feature-v4-config.component';

describe('FeatureV4ConfigComponent', () => {
  let component: FeatureV4ConfigComponent;
  let fixture: ComponentFixture<FeatureV4ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureV4ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureV4ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
