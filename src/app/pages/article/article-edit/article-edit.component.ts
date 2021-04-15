import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  auth_token;
  tenant_name;
  editArticleForm: FormGroup;
  editArticleElement;

  @Input() articleId;
  @Output() refreshListPage: EventEmitter<any> = new EventEmitter();
  constructor(private _articleService: ArticleService) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (!this.auth_token && !this.tenant_name) {
      console.error("-----------------------AuthToken and tenant_name not found--------------------------------");
    }
    this.initForm();
  }

  initForm() {
    // console.log("From Edit Article Id: " + this.articleId);
    this._articleService.getArticleById(this.auth_token, this.articleId).subscribe(
      data => {
        this.editArticleElement = data.data;
        // console.log(this.editArticleElement);
        this.editArticleForm = new FormGroup({
          articleId: new FormControl(this.editArticleElement.id),
          articleName: new FormControl(this.editArticleElement.title),
          articleDateOfArticle: new FormControl(this.editArticleElement.dateOfArticle),
          articleDescription: new FormControl(this.editArticleElement.description),
          articleIsPublic: new FormControl(this.editArticleElement.isPublic),
          articleCreatedAt: new FormControl(this.editArticleElement.createdAt),
          articleUpdatedAt: new FormControl(this.editArticleElement.updatedAt),

          articleTypeId: new FormControl(this.editArticleElement.articleType.id),
          articleTypeCreatedAt: new FormControl(this.editArticleElement.articleType.createdAt),
          articleTypeDescription: new FormControl(this.editArticleElement.articleType.description),
          articleTypeName: new FormControl(this.editArticleElement.articleType.name),
          articleTypeUpdatedAt: new FormControl(this.editArticleElement.articleType.updatedAt),

          userId: new FormControl(this.editArticleElement.user.id)
        });
      },
      error => {
        console.error(error);
      }
    );
  }

  editArticle() {
    // console.log(this.editArticleForm);
    this._articleService.updateArticleByFormData(this.auth_token, this.tenant_name, this.editArticleForm).subscribe(
      data => {
        // console.log("updateArticleByFormData: " + data.message);
        this.refreshListPage.emit(data.message);
      },
      error => {
        console.error(error);
      }
    );
  }

}
