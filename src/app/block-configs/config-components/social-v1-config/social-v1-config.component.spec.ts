import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialV1ConfigComponent } from './social-v1-config.component';

describe('SocialV1ConfigComponent', () => {
  let component: SocialV1ConfigComponent;
  let fixture: ComponentFixture<SocialV1ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialV1ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialV1ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
