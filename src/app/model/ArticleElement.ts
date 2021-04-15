import { ArticleTypeElement } from "./ArticleTypeElement";
import { UserElement } from "./UserElement";

export class ArticleElement {
    constructor(
        id: number,
        createdAt: String,
        dateOfArticle: String,
        description: String,
        isPublic: number,
        options: String,
        title: String,
        updatedAt: String,
        uploadToken: number,
        uuid: number,
        articleType: ArticleTypeElement,
        user: UserElement
    ) { }
}