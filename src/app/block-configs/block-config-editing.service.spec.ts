import { TestBed } from '@angular/core/testing';

import { BlockConfigEditingService } from './block-config-editing.service';

describe('BlockConfigEditingService', () => {
  let service: BlockConfigEditingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockConfigEditingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
