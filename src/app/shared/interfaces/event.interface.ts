import { EventType } from '../enums/event-type.enum';

export interface IEvent {
    _id?: string | number;
    id?: string | number;
    name: string;
    description: string;
    startDate: string | Date;
    endDate: string | Date;
}
