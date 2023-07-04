import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPageCreateComponent } from './new-page-create.component';

describe('NewPageCreateComponent', () => {
  let component: NewPageCreateComponent;
  let fixture: ComponentFixture<NewPageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPageCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
