import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBlockV6Component } from './feature-block-v6.component';

describe('FeatureBlockV6Component', () => {
  let component: FeatureBlockV6Component;
  let fixture: ComponentFixture<FeatureBlockV6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBlockV6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureBlockV6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
