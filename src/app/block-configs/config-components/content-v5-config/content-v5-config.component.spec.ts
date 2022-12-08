import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentV5ConfigComponent } from './content-v5-config.component';

describe('ContentV5ConfigComponent', () => {
  let component: ContentV5ConfigComponent;
  let fixture: ComponentFixture<ContentV5ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentV5ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentV5ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
