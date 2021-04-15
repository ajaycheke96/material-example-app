import { StudentElement } from "../model/StudentElement";

export interface StudentPayload {
    status: number;
    message: String;
    data: StudentElement[];
}