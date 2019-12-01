import { EventType } from '../enums/event-type.enum';

export interface IEvent {
    id?: string | number;
    name: string;
    description: string;
    startDate: string | Date;
    endDate: string | Date;
}
