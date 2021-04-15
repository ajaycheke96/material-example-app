export class EmployeeCategoryElement {

    id: number;
    createdAt: String;
    description: String;
    name: String;
    options: String;
    updatedAt: String;

    constructor(
        id: number,
        createdAt: String,
        description: String,
        name: String,
        options: String,
        updatedAt: String
    ) {
        this.id = id;
        this.createdAt = createdAt;
        this.description = description;
        this.name = name;
        this.options = options;
        this.updatedAt = updatedAt;
    }
}