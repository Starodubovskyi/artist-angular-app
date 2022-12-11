import { TestBed } from '@angular/core/testing';

import { FooterMenuService } from './footer-menu.service';

describe('FooterMenuService', () => {
  let service: FooterMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
