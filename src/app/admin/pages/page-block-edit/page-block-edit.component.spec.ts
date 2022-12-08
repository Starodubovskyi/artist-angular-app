import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlockEditComponent } from './page-block-edit.component';

describe('PageBlockEditComponent', () => {
  let component: PageBlockEditComponent;
  let fixture: ComponentFixture<PageBlockEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBlockEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBlockEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
