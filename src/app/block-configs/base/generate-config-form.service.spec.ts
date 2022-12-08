import { TestBed } from '@angular/core/testing';

import { GenerateConfigFormService } from './generate-config-form.service';

describe('GenerateConfigFormService', () => {
  let service: GenerateConfigFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateConfigFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
