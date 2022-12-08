import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactV1ConfigComponent } from './contact-v1-config.component';

describe('ContactV1ConfigComponent', () => {
  let component: ContactV1ConfigComponent;
  let fixture: ComponentFixture<ContactV1ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactV1ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactV1ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
