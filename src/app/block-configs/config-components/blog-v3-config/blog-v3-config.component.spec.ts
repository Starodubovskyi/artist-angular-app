import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogV3ConfigComponent } from './blog-v3-config.component';

describe('BlogV3ConfigComponent', () => {
  let component: BlogV3ConfigComponent;
  let fixture: ComponentFixture<BlogV3ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogV3ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogV3ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
