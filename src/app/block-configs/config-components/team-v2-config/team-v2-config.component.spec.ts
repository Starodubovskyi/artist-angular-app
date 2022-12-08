import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamV2ConfigComponent } from './team-v2-config.component';

describe('TeamV2ConfigComponent', () => {
  let component: TeamV2ConfigComponent;
  let fixture: ComponentFixture<TeamV2ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamV2ConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamV2ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
