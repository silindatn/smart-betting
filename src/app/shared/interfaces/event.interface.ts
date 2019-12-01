import { EventType } from '../enums/event-type.enum';

export interface IEvent {
    id?: string | number;
    name: string;
    descrition: string;
    startDate: string | Date;
    endDate: string | Date;
}
