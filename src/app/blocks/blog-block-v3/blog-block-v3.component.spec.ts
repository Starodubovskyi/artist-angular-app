import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBlockV3Component } from './blog-block-v3.component';

describe('BlogBlockV3Component', () => {
  let component: BlogBlockV3Component;
  let fixture: ComponentFixture<BlogBlockV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBlockV3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBlockV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
