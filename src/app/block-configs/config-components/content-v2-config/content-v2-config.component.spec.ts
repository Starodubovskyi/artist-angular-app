import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentV2ConfigComponent } from './content-v2-config.component';

describe('ContentV2ConfigComponent', () => {
  let component: ContentV2ConfigComponent;
  let fixture: ComponentFixture<ContentV2ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentV2ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentV2ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
