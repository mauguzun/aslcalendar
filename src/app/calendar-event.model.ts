import { stringify } from 'querystring';

export class CalendarEvent {
    id?: number = Math.floor(Date.now() / 1000);
    title: string;
    type: number;
    deadline: Date | string = new Date();
    notes: string;
    status = 1;
    options: CalendarEventOption[] = [];
    emails: string[] = [];

}
export class CalendarEventOption {
    id: number = Math.floor(Date.now() / 1000);
    start: Date | string;
    end: Date | string;
    voted?: [];
    place?: number;

    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

}

export class ViewLogin {
    name: string;
    email: string;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}


