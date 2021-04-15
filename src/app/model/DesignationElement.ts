import { EmployeeCategoryElement } from "./EmployeeCategoryElement";

export class DesignationElement {

    id: number;
    createdAt: String;
    description: String;
    isTeachingEmployee: number;
    name: String;
    options: String;
    updatedAt: String;
    employeeCategory: EmployeeCategoryElement;

    constructor(
        id: number,
        createdAt: String,
        description: String,
        isTeachingEmployee: number,
        name: String,
        options: String,
        updatedAt: String,
        employeeCategory: EmployeeCategoryElement
    ) {
        this.id = id;
        this.createdAt = createdAt;
        this.description = description;
        this.isTeachingEmployee = isTeachingEmployee;
        this.name = name;
        this.options = options;
        this.updatedAt = updatedAt;
        this.employeeCategory = employeeCategory;
    }
}