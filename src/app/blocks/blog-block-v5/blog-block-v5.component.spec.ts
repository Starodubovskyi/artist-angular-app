import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBlockV5Component } from './blog-block-v5.component';

describe('BlogBlockV5Component', () => {
  let component: BlogBlockV5Component;
  let fixture: ComponentFixture<BlogBlockV5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBlockV5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBlockV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
