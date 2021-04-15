import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {

  auth_token;
  tenant_name;
  articleForm: FormGroup;
  constructor(private _articleService: ArticleService) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    this.initForm();
  }

  initForm() {
    this.articleForm = new FormGroup({
      articleId: new FormControl(''),
      articleName: new FormControl(''),
      articleDateOfArticle: new FormControl(''),
      articleDescription: new FormControl(''),
      articleIsPublic: new FormControl(''),
      articleCreatedAt: new FormControl(''),
      articleUpdatedAt: new FormControl(''),

      articleTypeId: new FormControl(''),
      articleTypeCreatedAt: new FormControl(''),
      articleTypeDescription: new FormControl(''),
      articleTypeName: new FormControl(''),
      articleTypeUpdatedAt: new FormControl(''),

      userId: new FormControl('')
    });
  }

  saveArticle() {
    // console.log(this.articleForm);
    this._articleService.saveArticleByFormData(this.auth_token, this.tenant_name, this.articleForm).subscribe(
      data => {
        console.log("Message: " + data.message);
        this.initForm();
        alert(data.message);
      },
      error => {
        console.error(error);
      }
    );
  }

}
