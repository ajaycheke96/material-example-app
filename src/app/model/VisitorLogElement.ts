import { EmployeeElement } from "./EmployeeElement";
import { StudentElement } from "./StudentElement";
import { VisitingPurposeElement } from "./VisitingPurposeElement";

export interface VisitorLogElement {
    id: number;
    address: String;
    companyName: String;
    contactNumber: String;
    createdAt: String;
    dateOfVisit: String;
    entryTime: String;
    exitTime: String;
    name: String;
    options: String;
    relationWithStudent: String;
    remarks: String;
    type: number;
    updatedAt: String;
    uploadToken: String;
    uuid: String;
    visitorCount: number;
    employee: EmployeeElement;
    student: StudentElement;
    visitingPurpos: VisitingPurposeElement
}