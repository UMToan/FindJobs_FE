import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaListComponent } from './controller/area/area-list/area-list.component';
import { AreaCreateComponent } from '../app/controller/area/area-create/area-create.component';
import { AreaUpdateComponent } from './controller/area/area-update/area-update.component';
import { HomeComponent } from './layout/home/home.component';
import { JobsListComponent } from './controller/jobs/jobs-list/jobs-list.component';
import { JobsCreateComponent } from './controller/jobs/jobs-create/jobs-create.component';
import { JobsUpdateComponent } from './controller/jobs/jobs-update/jobs-update.component';
import { AreaDropDownListComponent } from './controller/area/area-drop-down-list/area-drop-down-list.component';
import { LoginComponent } from './authen/login/login.component';
import { ResgiComponent } from './authen/resgi/resgi.component';
import { ForgotPassComponent } from './authen/forgot-pass/forgot-pass.component';
import { sercurityGuard } from './authen/sercurity/sercurity.guard';
import { JobsDetailComponent } from './controller/jobs/jobs-detail/jobs-detail.component';
import { JobsLoadingComponent } from './controller/jobs/jobs-loading/jobs-loading.component';
import { AdminComponent } from './layout/admin/admin.component';
import { JobsTypeDropDownListComponent } from './controller/jobs/jobs-type-drop-down-list/jobs-type-drop-down-list.component';
import { JobsSearchComponent } from './controller/jobs/jobs-search/jobs-search.component';
import { FiledAreaJobsComponent } from './controller/jobs/filed-area-jobs/filed-area-jobs.component';
import { ResumeCreateComponent } from './controller/resume/resume-create/resume-create.component';
import { ResumeListComponent } from './controller/resume/resume-list/resume-list.component';
import { ResumeUpdateComponent } from './controller/resume/resume-update/resume-update.component';
import { AppicantListComponent } from './controller/appicant/appicant-list/appicant-list.component';
import { AppicantApplyComponent } from './controller/appicant/appicant-apply/appicant-apply.component';
import { ResumeDropDownListComponent } from './controller/resume/resume-drop-down-list/resume-drop-down-list.component';

const routes: Routes = [
  {path: 'areas', component: AreaListComponent},
  {path: 'areas-create', component: AreaCreateComponent},
  {path: '', component: HomeComponent},
  {path: 'areas-update/:id', component: AreaUpdateComponent},
  {path: 'areas-dropDownList', component: AreaDropDownListComponent},
  {path: 'jobs', component: JobsListComponent},
  {path: 'jobs-create', component: JobsCreateComponent},
  {path: 'jobs-loading', component: JobsLoadingComponent},
  {path: 'jobs-update/:id', component: JobsUpdateComponent},
  {path: 'jobs-detail/:id', component: JobsDetailComponent},
  {path: 'jobs-dropDownList', component: JobsTypeDropDownListComponent},
  {path: 'jobs-search/:query', component: JobsSearchComponent},
  {path: 'filer', component: FiledAreaJobsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'resgi', component: ResgiComponent},
  {path: 'forgotPass', component: ForgotPassComponent, canActivate: [sercurityGuard],},
  {path: 'admin', component: AdminComponent},
  {path: 'resume-create', component: ResumeCreateComponent},
  {path: 'resume', component:ResumeListComponent},
  {path: 'resumeUpdate/:id', component:ResumeUpdateComponent},
  {path: 'applicant-list', component:AppicantListComponent},
  {path: 'apply/:id', component: AppicantApplyComponent},
  {path: 'resume-dropDownList', component: ResumeDropDownListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
