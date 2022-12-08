import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlockV1Component } from './content-block-v1.component';

describe('ContentBlockV1Component', () => {
  let component: ContentBlockV1Component;
  let fixture: ComponentFixture<ContentBlockV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBlockV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBlockV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
