import { AcademicSessionElement } from "./AcademicSessionElement";
import { CourseGroupElement } from "./CourseGroupElement";

export interface CourseElement {
    id: number;
    createdAt: String;
    description: String;
    name: String;
    options: String;
    position: number;
    updatedAt: String;
    academicSession: AcademicSessionElement;
    courseGroup: CourseGroupElement
}