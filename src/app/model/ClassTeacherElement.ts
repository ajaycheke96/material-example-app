import { BatchElement } from "./BatchElement";
import { EmployeeElement } from "./EmployeeElement";

export class ClassTeacherElement {

    id: number;
    createdAt: String;
    dateEffective: String;
    description: String;
    options: String;
    updatedAt: String;
    batch: BatchElement;
    employee: EmployeeElement;

    constructor(
        id: number,
        createdAt: String,
        dateEffective: String,
        description: String,
        options: String,
        updatedAt: String,
        batch: BatchElement,
        employee: EmployeeElement
    ) {
        this.id = id;
        this.createdAt = createdAt;
        this.dateEffective = dateEffective;
        this.description = description;
        this.options = options;
        this.updatedAt = updatedAt;
        this.batch = batch;
        this.employee = employee;
    }
}