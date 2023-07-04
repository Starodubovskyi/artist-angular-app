import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPageListComponent } from './new-page-list.component';

describe('NewPageListComponent', () => {
  let component: NewPageListComponent;
  let fixture: ComponentFixture<NewPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
