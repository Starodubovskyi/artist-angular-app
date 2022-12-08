import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicConfigFormComponent } from './dynamic-config-form.component';

describe('DynamicConfigFormComponent', () => {
  let component: DynamicConfigFormComponent;
  let fixture: ComponentFixture<DynamicConfigFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicConfigFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicConfigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
