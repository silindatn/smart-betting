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
        expect(res.data.length).toBe(2);
        expect(res.data).toEqual(dummyResponse.data);
    });
    const request = httpMock.expectOne( `http://localhost:9000/api/events`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyResponse);
  });
  it('be able to retrieve Markets from the API via GET', () => {
    const dummyResponse = {
      response: {
        info: 'markets list',
        version: 1,
        method: 'GET',
        href: 'http://localhost:9000/api/markets'
      },
      data: [
        {
          id: '5de6a6b2ef43a84f71cf129f',
          name: 'match',
          actualOutcome: {
            name: 'team 2 win',
            probability: 1.5
          },
          posibleOutcome: [
            {
              name: 'team 1 win',
              probability: 0.5,
              _id: '5de6a6b2ef43a84f71cf12a2'
            },
            {
              name: 'draw',
              probability: 0.4,
              _id: '5de6a6b2ef43a84f71cf12a1'
            },
            {
              name: 'team 2 win',
              probability: 0.1,
              _id: '5de6a6b2ef43a84f71cf12a0'
            }
          ],
          eventId: '5de539a351d85822994b6f25',
          createdAt: '2019-12-03T18:17:22.247Z',
          updatedAt: '2019-12-05T18:39:19.193Z'
        },
        {
          id: '5de80aff65d08b432aa606ee',
          name: 'match 2',
          actualOutcome: {
            name: 'Team 1',
            probability: 1
          },
          posibleOutcome: [
            {
              name: 'Team 1',
              probability: 0.7,
              _id: '5de80aff65d08b432aa606f1'
            },
            {
              name: 'Draw',
              probability: 0.2,
              _id: '5de80aff65d08b432aa606f0'
            },
            {
              name: 'Team 2',
              probability: 0.1,
              _id: '5de80aff65d08b432aa606ef'
            }
          ],
          eventId: '5de53d5d51d85822994b6f33',
          createdAt: '2019-12-04T19:37:35.822Z',
          updatedAt: '2019-12-05T18:37:37.992Z'
        },
        {
          id: '5de8114465d08b432aa60715',
          name: 'match 3',
          actualOutcome: {},
          posibleOutcome: [
            {
              name: 'outcome 0',
              probability: 0.4,
              _id: '5de8114465d08b432aa60718'
            },
            {
              name: 'outcome 1',
              probability: 0.2,
              _id: '5de8114465d08b432aa60717'
            },
            {
              name: 'outcome 2',
              probability: 0.4,
              _id: '5de8114465d08b432aa60716'
            }
          ],
          eventId: '5de539a351d85822994b6f25',
          createdAt: '2019-12-04T20:04:20.189Z',
          updatedAt: '2019-12-05T18:38:19.564Z'
        },
        {
          id: '5de81aa20c4d3c0a898a5fad',
          name: 'match 3',
          actualOutcome: {},
          posibleOutcome: [
            {
              name: 'outcome 0',
              probability: 0.8,
              _id: '5de81aa20c4d3c0a898a5fb0'
            },
            {
              name: 'outcome 1',
              probability: 0.1,
              _id: '5de81aa20c4d3c0a898a5faf'
            },
            {
              name: 'outcome 2',
              probability: 0.1,
              _id: '5de81aa20c4d3c0a898a5fae'
            }
          ],
          eventId: '5de53d5d51d85822994b6f33',
          createdAt: '2019-12-04T20:44:18.201Z',
          updatedAt: '2019-12-05T18:38:50.081Z'
        }
      ]
    };
    service.getMarkets().subscribe((res: any) => {
        expect(res.data.length).toBe(4);
        expect(res.data).toEqual(dummyResponse.data);
    });
    const request = httpMock.expectOne( `http://localhost:9000/api/markets`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyResponse);
  });
  it('be able to retrieve Bets from the API via GET', () => {
    const dummyResponse = {
      response: {
        info: 'bets list',
        version: 1,
        method: 'GET',
        href: 'http://localhost:9000/api/bets'
      },
      data: [
        {
          id: '5de80b2865d08b432aa606fb',
          posibleOutcome: {
            name: 'Team 2',
            probability: 0.1
          },
          amount: 100,
          eventId: '5de53d5d51d85822994b6f33',
          marketId: '5de80aff65d08b432aa606ee',
          result: 'pending',
          winings: 0,
          createdAt: '2019-12-04T19:38:16.687Z',
          updatedAt: '2019-12-05T18:39:43.122Z'
        },
        {
          id: '5de80b3865d08b432aa60700',
          posibleOutcome: {
            name: 'draw',
            probability: 0.4
          },
          amount: 50,
          eventId: '5de539a351d85822994b6f25',
          marketId: '5de6a6b2ef43a84f71cf129f',
          result: 'pending',
          winings: 0,
          createdAt: '2019-12-04T19:38:32.773Z',
          updatedAt: '2019-12-05T18:40:01.141Z'
        },
        {
          id: '5de80b4765d08b432aa60705',
          posibleOutcome: {
            name: 'team 1 win',
            probability: 0.5
          },
          amount: 25,
          eventId: '5de539a351d85822994b6f25',
          marketId: '5de6a6b2ef43a84f71cf129f',
          result: 'pending',
          winings: 0,
          createdAt: '2019-12-04T19:38:47.515Z',
          updatedAt: '2019-12-05T18:40:20.227Z'
        },
        {
          id: '5de80b5b65d08b432aa6070a',
          posibleOutcome: {
            name: 'Draw',
            probability: 0.2
          },
          amount: 200,
          eventId: '5de53d5d51d85822994b6f33',
          marketId: '5de80aff65d08b432aa606ee',
          result: 'pending',
          winings: 0,
          createdAt: '2019-12-04T19:39:07.156Z',
          updatedAt: '2019-12-05T18:40:28.583Z'
        },
        {
          id: '5de6bd325abfbf089d9e9d87',
          posibleOutcome: {
            name: 'team 2 win',
            probability: 0.1
          },
          amount: 15,
          eventId: '5de539a351d85822994b6f25',
          marketId: '5de6a6b2ef43a84f71cf129f',
          result: 'pending',
          winings: 135,
          createdAt: '2019-12-03T19:53:22.159Z',
          updatedAt: '2019-12-05T19:46:18.011Z'
        }
      ]
    };
    service.getBets().subscribe((res: any) => {
        expect(res.data.length).toBe(5);
        expect(res.data).toEqual(dummyResponse.data);
    });
    const request = httpMock.expectOne( `http://localhost:9000/api/bets`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyResponse);
  });
  it('be able to retrieve Report from the API via GET', () => {
    const dummyResponse = {
      response: {
        info: 'charts info',
        version: 1,
        method: 'GET',
        href: 'http://localhost:9000/api/bets/chart-report'
      },
      data: {
        charts: [
          {
            title: 'Winning Bets vs Losing Bets',
            labels: [
              'Pay In Bets',
              'Pay Out Bets'
            ],
            data: [
              4,
              1
            ]
          },
          {
            title: 'Pay out Amount vs Pay in Amount',
            labels: [
              'Pay In Amount',
              'Pay Out Amount'
            ],
            data: [
              375,
              135
            ]
          }
        ],
        data: [
          {
            _id: '5de80b2865d08b432aa606fb',
            updatedAt: '2019-12-05T18:39:43.122Z',
            createdAt: '2019-12-04T19:38:16.687Z',
            eventId: '5de53d5d51d85822994b6f33',
            marketId: '5de80aff65d08b432aa606ee',
            __v: 0,
            amount: 100,
            winingMargins: 10,
            winings: 0,
            result: 'pending',
            posibleOutcome: {
              probability: 0.1,
              name: 'Team 2'
            }
          },
          {
            _id: '5de80b3865d08b432aa60700',
            updatedAt: '2019-12-05T18:40:01.141Z',
            createdAt: '2019-12-04T19:38:32.773Z',
            eventId: '5de539a351d85822994b6f25',
            marketId: '5de6a6b2ef43a84f71cf129f',
            __v: 0,
            amount: 50,
            winingMargins: 2.5,
            winings: 0,
            result: 'pending',
            posibleOutcome: {
              probability: 0.4,
              name: 'draw'
            }
          },
          {
            _id: '5de80b4765d08b432aa60705',
            updatedAt: '2019-12-05T18:40:20.227Z',
            createdAt: '2019-12-04T19:38:47.515Z',
            eventId: '5de539a351d85822994b6f25',
            marketId: '5de6a6b2ef43a84f71cf129f',
            __v: 0,
            amount: 25,
            winingMargins: 2,
            winings: 0,
            result: 'pending',
            posibleOutcome: {
              probability: 0.5,
              name: 'team 1 win'
            }
          },
          {
            _id: '5de80b5b65d08b432aa6070a',
            updatedAt: '2019-12-05T18:40:28.583Z',
            createdAt: '2019-12-04T19:39:07.156Z',
            eventId: '5de53d5d51d85822994b6f33',
            marketId: '5de80aff65d08b432aa606ee',
            __v: 0,
            amount: 200,
            winingMargins: 5,
            winings: 0,
            result: 'pending',
            posibleOutcome: {
              probability: 0.2,
              name: 'Draw'
            }
          },
          {
            _id: '5de6bd325abfbf089d9e9d87',
            updatedAt: '2019-12-06T15:20:43.675Z',
            createdAt: '2019-12-03T19:53:22.159Z',
            eventId: '5de539a351d85822994b6f25',
            marketId: '5de6a6b2ef43a84f71cf129f',
            __v: 0,
            amount: 15,
            winingMargins: 10,
            winings: 135,
            result: 'pending',
            posibleOutcome: {
              probability: 0.1,
              name: 'team 2 win'
            }
          }
        ]
      }
    };
    service.getReport().subscribe((res: any) => {
        expect(typeof res.data).toBe('object');
        expect(res.data.charts.length).toBe(2);
        expect(res.data.data.length).toBe(5);
        expect(res.data).toEqual(dummyResponse.data);
    });
    const request = httpMock.expectOne( `http://localhost:9000/api/bets/chart-report`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyResponse);
  });
  it('be able to retrieve an Event from the API via GET by id', () => {
    const dummyResponse = {
      response: {
        info: 'events read',
        version: 1,
        method: 'GET',
        href: 'http://localhost:9000/api/events/5de539a351d85822994b6f25'
      },
      data: {
          id: '5de539a351d85822994b6f25',
          name: 'epl ht',
          description: 'manu vs mancity',
          startDate: '2019-12-02T16:19:00.000Z',
          endDate: '2019-12-02T16:19:00.000Z',
          createdAt: '2019-12-02T16:19:47.694Z',
          updatedAt: '2019-12-02T17:00:17.279Z'
        }
    };
    service.getEvent('5de539a351d85822994b6f25').subscribe((res: any) => {
        expect(res.data.id).toEqual('5de539a351d85822994b6f25');
        expect(res.data).toEqual(dummyResponse.data);
    });
    const request = httpMock.expectOne( `http://localhost:9000/api/events/5de539a351d85822994b6f25`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyResponse);
  });
  it('be able to retrieve an Event from the API via GET by id should return null', () => {
    const dummyResponse = {
      response: {
        info: 'events read',
        version: 1,
        method: 'GET',
        href: 'http://localhost:9000/api/events/5de539a351d85822994b6f25'
      },
      data: null
    };
    service.getEvent('5de539a351d85822994b6f25').subscribe((res: any) => {
        expect(res.data).toEqual(null);
        expect(res.data).toEqual(dummyResponse.data);
    });
    const request = httpMock.expectOne( `http://localhost:9000/api/events/5de539a351d85822994b6f25`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyResponse);
  });
});
