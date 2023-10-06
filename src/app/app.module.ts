import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaListComponent } from './controller/area/area-list/area-list.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AreaUpdateComponent } from './controller/area/area-update/area-update.component';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { JobsListComponent } from './controller/jobs/jobs-list/jobs-list.component';
import { AreaCreateComponent } from './controller/area/area-create/area-create.component';
import { JobsCreateComponent } from './controller/jobs/jobs-create/jobs-create.component';
import { JobsUpdateComponent } from './controller/jobs/jobs-update/jobs-update.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AreaDropDownListComponent } from './controller/area/area-drop-down-list/area-drop-down-list.component';
import { UploadImgComponent } from './controller/jobs/upload-img/upload-img.component';
import { ResgiComponent } from './authen/resgi/resgi.component';
import { LoginComponent } from './authen/login/login.component';
import { ForgotPassComponent } from './authen/forgot-pass/forgot-pass.component';
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
@NgModule({
  declarations: [
    AppComponent,
    AreaListComponent,
    AreaUpdateComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    JobsListComponent,
    AreaCreateComponent,
    JobsCreateComponent,
    JobsUpdateComponent,
    AreaDropDownListComponent,
    UploadImgComponent,
    ResgiComponent,
    LoginComponent,
    ForgotPassComponent,
    JobsDetailComponent,
    JobsLoadingComponent,
    AdminComponent,
    JobsTypeDropDownListComponent,
    JobsSearchComponent,
    FiledAreaJobsComponent,
    ResumeCreateComponent,
    ResumeListComponent,
    ResumeUpdateComponent,
    AppicantListComponent,
    AppicantApplyComponent,
    ResumeDropDownListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
