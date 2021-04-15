import { CallingPurposeElement } from "./CallingPurposeElement";
import { UserElement } from "./UserElement";

export class CallLogElement {
    constructor(
        id: number,
        createdAt: String,
        date: String,
        description: String,
        endTime: String,
        incomingNumber: String,
        name: String,
        options: String,
        outgoingNumber: String,
        startTime: String,
        type: String,
        updatedAt: String,
        uploadToken: String,
        uuid: String,
        callingPurpos: CallingPurposeElement,
        user: UserElement
    ) { }
}