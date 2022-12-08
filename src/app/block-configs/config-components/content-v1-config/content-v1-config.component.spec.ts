import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentV1ConfigComponent } from './content-v1-config.component';

describe('ContentV1ConfigComponent', () => {
  let component: ContentV1ConfigComponent;
  let fixture: ComponentFixture<ContentV1ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentV1ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentV1ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
