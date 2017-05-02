import { uuid } from "../utils/uuid";

export class Thread {
    id: string;
    lastMessage: string;
    avatarSrc: string;

    constructor(id?: string, avatarSrc?: string) {
        this.id = id || uuid();
        this.avatarSrc = avatarSrc;
    }
}