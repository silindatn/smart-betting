import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';

import { IEvent } from '../interfaces/event.interface';
import { AppModule } from 'src/app/app.module';

describe('ApiService', () => {

  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, HttpClientTestingModule ],
      providers: []
    });

    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('be able to retrieve Events from the API via GET', () => {
    const dummyResponse = {
      response: {
        info: 'events list',
        version: 1,
        method: 'GET',
        href: 'http://localhost:9000/api/events'
      },
      data: [
        {
          id: '5de539a351d85822994b6f25',
          name: 'epl ht',
          description: 'manu vs mancity',
          startDate: '2019-12-02T16:19:00.000Z',
          endDate: '2019-12-02T16:19:00.000Z',
          createdAt: '2019-12-02T16:19:47.694Z',
          updatedAt: '2019-12-02T17:00:17.279Z'
        },
        {
          id: '5de53d5d51d85822994b6f33',
          name: 'epl match',
          description: 'manu vs mancity',
          startDate: '2019-12-02T16:12:00.000Z',
          endDate: '2019-12-02T16:12:00.000Z',
          createdAt: '2019-12-02T16:35:41.292Z',
          updatedAt: '2019-12-02T16:35:41.292Z'
        }
      ]
    };
    service.getEvents().subscribe((res: any) => {
        expect(res.data).toBe(2);
        expect(res.data).toEqual(dummyResponse.data);
    });
    const request = httpMock.expectOne( `http://localhost:9000/api/events`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyResponse);
    });
});
