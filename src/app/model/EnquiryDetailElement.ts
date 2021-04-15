import { CourseElement } from "./CourseElement";
import { InstituteElement } from "./InstituteElement";

export interface EnquiryDetailElement {
    id: number;
    createdAt: String;
    dateOfBirth: String;
    gender: String;
    isAdmitted: number;
    options: String;
    remarks: String;
    studentName: String;
    updatedAt: String;
    uuid: String;
    cours: CourseElement;
    institute: InstituteElement
}