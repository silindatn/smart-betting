import { IEvent } from './event.interface';
import { IOutcome } from './outcome.interface';

export interface IMarket {
    id?: string | number;
    eventId: string | number;
    posibleOutcome: IOutcome[];
    name: string;
}
