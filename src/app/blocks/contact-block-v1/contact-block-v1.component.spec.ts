import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBlockV1Component } from './contact-block-v1.component';

describe('ContactBlockV1Component', () => {
  let component: ContactBlockV1Component;
  let fixture: ComponentFixture<ContactBlockV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBlockV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBlockV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
