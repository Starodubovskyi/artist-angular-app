import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogV5ConfigComponent } from './blog-v5-config.component';

describe('BlogV5ConfigComponent', () => {
  let component: BlogV5ConfigComponent;
  let fixture: ComponentFixture<BlogV5ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogV5ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogV5ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
