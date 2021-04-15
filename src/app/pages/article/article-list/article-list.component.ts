import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ArticleElement } from 'src/app/model/ArticleElement';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  auth_token;
  tenant_name;
  articles: ArticleElement[];
  displayedColumns: string[] = ['position', 'title', 'articleType', 'isPublic', 'user', 'dateOfArticle', 'operations'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource;

  @Output() fetchEditArticleId: EventEmitter<any> = new EventEmitter();
  constructor(private _articleService: ArticleService) { }

  ngOnInit(): void {
    this.auth_token = sessionStorage.getItem("auth_token");
    this.tenant_name = sessionStorage.getItem("tenant_name");
    if (!this.auth_token && !this.tenant_name) {
      console.error("----------------------------------Auth Token Not found - In Article List Component -----------------------------------");
    }
    this.listAllArticles();
  }

  listAllArticles() {
    this._articleService.getListAllArticles(this.auth_token).subscribe(
      data => {
        this.articles = data.data;
        this.dataSource = new MatTableDataSource<ArticleElement>(this.articles);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.error(error);
      }
    )
  }

  editArticle(id: number) {
    // console.log("Edit Article Id: " + id);
    this.fetchEditArticleId.emit(id)
  }

  deleteArticle(articleElement) {
    // console.log(articleElement);
    this._articleService.deleteArticle(this.auth_token, this.tenant_name, articleElement).subscribe(
      data => {
        console.log("Message:" + data.message);
        alert(data.message);
        this.listAllArticles();
      },
      error => {
        console.error(error);
      }
    );
  }

}
