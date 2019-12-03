import { IEvent } from './event.interface';

export interface IMarket {
    id?: string | number;
    event: string | number | IEvent;
    posibleOutcome: string[];
    name: string;
}
