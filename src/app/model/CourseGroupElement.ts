import { AcademicSessionElement } from "./AcademicSessionElement";

export interface CourseGroupElement {
    id: number;
    createdAt: String;
    description: String;
    name: String;
    options: String;
    position: number;
    updatedAt: String;
    academicSession: AcademicSessionElement
}