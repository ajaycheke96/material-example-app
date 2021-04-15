import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CallLogsComponent } from './pages/call-logs/call-logs.component';
import { CallLogsService } from './services/call-logs.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CallLogEditComponent } from './pages/call-logs/call-log-edit/call-log-edit.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticleListComponent } from './pages/article/article-list/article-list.component';
import { ArticleAddComponent } from './pages/article/article-add/article-add.component';
import { ArticleEditComponent } from './pages/article/article-edit/article-edit.component';
import { ClassTimingSessionComponent } from './pages/class-timing-session/class-timing-session.component';
import { ClassTimingSessionListComponent } from './pages/class-timing-session/class-timing-session-list/class-timing-session-list.component';
import { ClassTimingSessionAddComponent } from './pages/class-timing-session/class-timing-session-add/class-timing-session-add.component';
import { ClassTimingSessionEditComponent } from './pages/class-timing-session/class-timing-session-edit/class-timing-session-edit.component';
import { AcademicSessionComponent } from './pages/academic-session/academic-session.component';
import { AcademicSessionListComponent } from './pages/academic-session/academic-session-list/academic-session-list.component';
import { AcademicSessionAddComponent } from './pages/academic-session/academic-session-add/academic-session-add.component';
import { AcademicSessionEditComponent } from './pages/academic-session/academic-session-edit/academic-session-edit.component';
import { EmployeeTermComponent } from './pages/employee-term/employee-term.component';
import { EmployeeTermListComponent } from './pages/employee-term/employee-term-list/employee-term-list.component';
import { EmployeeTermEditComponent } from './pages/employee-term/employee-term-edit/employee-term-edit.component';
import { EmployeeTermAddComponent } from './pages/employee-term/employee-term-add/employee-term-add.component';
import { ClassTeacherComponent } from './pages/class-teacher/class-teacher.component';
import { ClassTeacherListComponent } from './pages/class-teacher/class-teacher-list/class-teacher-list.component';
import { ClassTeacherAddComponent } from './pages/class-teacher/class-teacher-add/class-teacher-add.component';
import { ClassTeacherEditComponent } from './pages/class-teacher/class-teacher-edit/class-teacher-edit.component';
import { VisitorLogComponent } from './pages/visitor-log/visitor-log.component';
import { VisitorLogListComponent } from './pages/visitor-log/visitor-log-list/visitor-log-list.component';
import { VisitorLogAddComponent } from './pages/visitor-log/visitor-log-add/visitor-log-add.component';
import { VisitorLogEditComponent } from './pages/visitor-log/visitor-log-edit/visitor-log-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CallLogsComponent,
    CallLogEditComponent,
    LoginComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleAddComponent,
    ArticleEditComponent,
    ClassTimingSessionComponent,
    ClassTimingSessionListComponent,
    ClassTimingSessionAddComponent,
    ClassTimingSessionEditComponent,
    AcademicSessionComponent,
    AcademicSessionListComponent,
    AcademicSessionAddComponent,
    AcademicSessionEditComponent,
    EmployeeTermComponent,
    EmployeeTermListComponent,
    EmployeeTermEditComponent,
    EmployeeTermAddComponent,
    ClassTeacherComponent,
    ClassTeacherListComponent,
    ClassTeacherAddComponent,
    ClassTeacherEditComponent,
    VisitorLogComponent,
    VisitorLogListComponent,
    VisitorLogAddComponent,
    VisitorLogEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [CallLogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
