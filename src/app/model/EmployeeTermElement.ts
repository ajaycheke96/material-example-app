import { EmployeeDesignationElement } from "./EmployeeDesignationElement";
import { EmployeeElement } from "./EmployeeElement";

export class EmployeeTermElement {
    id: number;
    createdAt: String; //2021-03-04 T 16:58:42,
    dateOfJoining: String; //2021-01-27,
    dateOfLeaving: String; //2021-01-27,
    joiningRemarks: String;
    leavingRemarks: String;
    options: String;
    updatedAt: String; //2021-03-04 T 17:01:46,
    uploadToken: String;
    employeeDesignations: EmployeeDesignationElement[];
    employee: EmployeeElement;

    constructor(
        id: number,
        createdAt: String,
        dateOfJoining: String,
        dateOfLeaving: String,
        joiningRemarks: String,
        leavingRemarks: String,
        options: String,
        updatedAt: String,
        uploadToken: String,
        employeeDesignations: EmployeeDesignationElement[],
        employee: EmployeeElement
    ) {
        this.id = id;
        this.createdAt = createdAt;
        this.dateOfJoining = dateOfJoining;
        this.dateOfLeaving = dateOfLeaving;
        this.joiningRemarks = joiningRemarks;
        this.leavingRemarks = leavingRemarks;
        this.options = options;
        this.updatedAt = updatedAt;
        this.uploadToken = uploadToken;
        this.employeeDesignations = employeeDesignations;
        this.employee = employee
    }
}