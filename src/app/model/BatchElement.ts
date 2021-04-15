export class BatchElement {
    id: number;
    createdAt: String;
    description: String;
    name: String;
    options: String;
    position: number;
    updatedAt: String;

    constructor(
        id: number,
        createdAt: String,
        description: String,
        name: String,
        options: String,
        position: number,
        updatedAt: String
    ) {
        this.id = id;
        this.createdAt = createdAt;
        this.description = description;
        this.name = name;
        this.options = options;
        this.position = position;
        this.updatedAt = updatedAt;
    }
}