import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogV2ConfigComponent } from './blog-v2-config.component';

describe('BlogV2ConfigComponent', () => {
  let component: BlogV2ConfigComponent;
  let fixture: ComponentFixture<BlogV2ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogV2ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogV2ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
