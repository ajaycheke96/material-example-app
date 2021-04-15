import { DepartmentElement } from "./DepartmentElement";
import { DesignationElement } from "./DesignationElement";

export class EmployeeDesignationElement {
    id: number;
    createdAt: String;
    dateEffective: String;
    dateEnd: String;
    options: String;
    remarks: String;
    updatedAt: String;
    uploadToken: String;
    department: DepartmentElement;
    designation: DesignationElement;

    constructor(
        id: number,
        createdAt: String,
        dateEffective: String,
        dateEnd: String,
        options: String,
        remarks: String,
        updatedAt: String,
        uploadToken: String,
        department: DepartmentElement,
        designation: DesignationElement
    ) {
        this.id = id;
        this.createdAt = createdAt;
        this.dateEffective = dateEffective;
        this.dateEnd = dateEnd;
        this.options = options;
        this.remarks = remarks;
        this.updatedAt = updatedAt;
        this.uploadToken = uploadToken;
        this.department = department;
        this.designation = designation;
    }
}