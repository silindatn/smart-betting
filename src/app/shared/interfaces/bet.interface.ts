import { IOutcome } from './outcome.interface';

export interface IBet {
    id?: string | number;
    posibleOutcome: IOutcome;
    amount: number;
    eventId: string | number;
    marketId: string | number;
    userId: string | number;
    result?: string;
    winings?: number;
}
