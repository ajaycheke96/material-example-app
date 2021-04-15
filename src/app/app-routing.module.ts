import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicSessionComponent } from './pages/academic-session/academic-session.component';
import { ArticleComponent } from './pages/article/article.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CallLogsComponent } from './pages/call-logs/call-logs.component';
import { ClassTeacherComponent } from './pages/class-teacher/class-teacher.component';
import { ClassTimingSessionComponent } from './pages/class-timing-session/class-timing-session.component';
import { EmployeeTermComponent } from './pages/employee-term/employee-term.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { VisitorLogComponent } from './pages/visitor-log/visitor-log.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'callLog',
    component: CallLogsComponent
  },
  {
    path: 'article',
    component: ArticleComponent
  },
  {
    path: 'classTimingSession',
    component: ClassTimingSessionComponent
  },
  {
    path: 'academicSession',
    component: AcademicSessionComponent
  },
  {
    path: 'employeeTerm',
    component: EmployeeTermComponent
  },
  {
    path: 'classTeacher',
    component: ClassTeacherComponent
  },
  {
    path: 'visitorLog',
    component: VisitorLogComponent
  },
  {
    path: 'enquiry',
    component: EnquiryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
