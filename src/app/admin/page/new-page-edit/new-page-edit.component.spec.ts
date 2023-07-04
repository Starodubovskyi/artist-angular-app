import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPageEditComponent } from './new-page-edit.component';

describe('NewPageEditComponent', () => {
  let component: NewPageEditComponent;
  let fixture: ComponentFixture<NewPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
