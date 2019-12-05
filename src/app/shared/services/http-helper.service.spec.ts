import { TestBed } from '@angular/core/testing';

import { HttpHelperService } from './http-helper.service';
import { AppModule } from 'src/app/app.module';

describe('HttpHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ AppModule ]
  }));

  it('should be created', () => {
    const service: HttpHelperService = TestBed.get(HttpHelperService);
    expect(service).toBeTruthy();
  });
});
