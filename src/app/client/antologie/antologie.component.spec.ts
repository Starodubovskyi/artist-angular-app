import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntologieComponent } from './antologie.component';

describe('AntologieComponent', () => {
  let component: AntologieComponent;
  let fixture: ComponentFixture<AntologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntologieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
