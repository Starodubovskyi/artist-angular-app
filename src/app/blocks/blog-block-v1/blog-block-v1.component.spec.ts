import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBlockV1Component } from './blog-block-v1.component';

describe('BlogBlockV1Component', () => {
  let component: BlogBlockV1Component;
  let fixture: ComponentFixture<BlogBlockV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBlockV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBlockV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
