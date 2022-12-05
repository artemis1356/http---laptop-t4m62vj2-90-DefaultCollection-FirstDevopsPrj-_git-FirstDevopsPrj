import { TestBed } from '@angular/core/testing';

import { StockAreaService } from './stock-area.service';

describe('StockAreaService', () => {
  let service: StockAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
