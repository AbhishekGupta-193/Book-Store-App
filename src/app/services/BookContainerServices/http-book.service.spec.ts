import { TestBed } from '@angular/core/testing';

import { HttpBookService } from './http-book.service';

describe('HttpBookService', () => {
  let service: HttpBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
