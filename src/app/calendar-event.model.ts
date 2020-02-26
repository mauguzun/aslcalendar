export class CalendarEvent {
    id?: number;
    title: string;
    type: number;
    deadline: Date = new Date();
    notes: string;
    options: CalendarEventOption[];
    users: User[];

}
export class CalendarEventOption {
    id: string;
    start: Date;
    end: Date;
    voted?: Vote[];

    constructor(id, start, end) {
        this.id = id;
        this.start = start;
        this.end = end;
    }
}

export class User {

}
export class Vote {
    user: User;
    date: Date;
    options: CalendarEventOption;
}