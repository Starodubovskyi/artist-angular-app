import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlockV2Component } from './content-block-v2.component';

describe('ContentBlockV2Component', () => {
  let component: ContentBlockV2Component;
  let fixture: ComponentFixture<ContentBlockV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBlockV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBlockV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
