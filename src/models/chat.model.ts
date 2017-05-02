import { uuid } from "../utils/uuid";
import { Thread } from "./thread.model";

export class Chat {
    id: string;
    send_from: string;
    isRead: boolean;
    send_At: Date;
    thread: Thread;
    content: string;

    constructor(obj? : any) {
        this.id = obj && obj.id || uuid();
        this.send_from = obj && obj.send_from || null;
        this.isRead = obj && obj.isRead || false;
        this.send_At = obj && obj.send_At || null;
        this.thread = obj && obj.thread || null;
        this.content = obj && obj.content || null;
    }
}