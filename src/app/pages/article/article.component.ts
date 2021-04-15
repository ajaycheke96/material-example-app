import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  isLoggedIn;
  isArticleListShow;
  isArticleAddShow;
  isArticleEditShow;
  articleId;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem("auth_token");
    if (!this.isLoggedIn) {
      this.router.navigate(['/']);
    }
    this.isArticleListShow = true;
    this.isArticleAddShow = false;
    this.isArticleEditShow = false;
  }

  toogleListView() {
    this.isArticleListShow = true;
    this.isArticleAddShow = false;
    this.isArticleEditShow = false;
  }

  toogleAddView() {
    this.isArticleListShow = false;
    this.isArticleAddShow = true;
    this.isArticleEditShow = false;
  }

  fetchEditArticleId(id: number) {
    this.articleId = id;
    // console.log("From main Article component: " + this.articleId);
    this.isArticleListShow = false;
    this.isArticleAddShow = false;
    this.isArticleEditShow = true;
  }

  refreshListPage(message) {
    // console.log("From Main Article Page: " + message);
    this.articleId;
    this.isArticleListShow = true;
    this.isArticleAddShow = false;
    this.isArticleEditShow = false;
  }
}
