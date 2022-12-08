import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamV1ConfigComponent } from './team-v1-config.component';

describe('TeamV1ConfigComponent', () => {
  let component: TeamV1ConfigComponent;
  let fixture: ComponentFixture<TeamV1ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamV1ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamV1ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
