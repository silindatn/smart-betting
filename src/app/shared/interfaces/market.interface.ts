import { IEvent } from './event.interface';

export interface IMarket {
    id?: string | number;
    eventId: string | number;
    posibleOutcome: string[];
    name: string;
}
