import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBlockV2Component } from './blog-block-v2.component';

describe('BlogBlockV2Component', () => {
  let component: BlogBlockV2Component;
  let fixture: ComponentFixture<BlogBlockV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBlockV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBlockV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
