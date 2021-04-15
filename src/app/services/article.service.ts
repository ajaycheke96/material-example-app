import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getListAllArticles(auth_token): Observable<any> {
    return this.http.get(`${baseUrl}/article/listAllArticle`, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": "test1"
      }
    })
  }

  getArticleById(auth_token, id): Observable<any> {
    return this.http.get(`${baseUrl}/article/${id}`, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": "test1"
      }
    });
  }

  saveArticleByFormData(auth_token, tenant_name, editArticleForm): Observable<any> {
    let article = {
      id: editArticleForm.value.articleId,
      title: editArticleForm.value.articleName,
      dateOfArticle: editArticleForm.value.articleDateOfArticle,
      description: editArticleForm.value.articleDescription,
      isPublic: editArticleForm.value.articleIsPublic,
      articleType: {
        id: editArticleForm.value.articleTypeId,
        name: editArticleForm.value.articleTypeName,
        description: editArticleForm.value.articleTypeDescription
      },
      user: {
        id: editArticleForm.value.userId
      }
    };
    return this.http.post(`${baseUrl}/article/saveArticle`, article, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": tenant_name
      }
    });
  }

  updateArticleByFormData(auth_token, tenant_name, editArticleForm): Observable<any> {
    let article = {
      id: editArticleForm.value.articleId,
      title: editArticleForm.value.articleName,
      dateOfArticle: editArticleForm.value.articleDateOfArticle,
      description: editArticleForm.value.articleDescription,
      isPublic: editArticleForm.value.articleIsPublic,
      createdAt: editArticleForm.value.articleCreatedAt,
      updatedAt: editArticleForm.value.articleUpdatedAt,
      articleType: {
        id: editArticleForm.value.articleTypeId,
        name: editArticleForm.value.articleTypeName,
        createdAt: editArticleForm.value.articleTypeCreatedAt,
        description: editArticleForm.value.articleTypeDescription,
        updatedAt: editArticleForm.value.articleTypeUpdatedAt
      },
      user: {
        id: editArticleForm.value.userId
      }
    };
    return this.http.post(`${baseUrl}/article/updateArticle`, article, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": tenant_name
      }
    });
  }

  deleteArticle(auth_token, tenant_name, articleElement): Observable<any> {
    return this.http.post(`${baseUrl}/article/deleteArticle`, articleElement, {
      headers: {
        "Authorization": "Bearer " + auth_token,
        "X-Tenant": tenant_name
      }
    });
  }
}
