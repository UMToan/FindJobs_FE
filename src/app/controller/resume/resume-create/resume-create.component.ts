import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';
import { Resume } from 'src/app/model/resume';
import { ResumeService } from 'src/app/service/resume/resume.service';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/service/account.service';
@Component({
  selector: 'app-resume-create',
  templateUrl: './resume-create.component.html',
  styleUrls: ['./resume-create.component.css']
})
export class ResumeCreateComponent implements OnInit{

  public Editor = ClassicEditor;
  resume:Resume = new Resume();
  account: Account = new Account();
  acc: Account[];
  id: any;
  constructor(private resumeService: ResumeService,private accountService: AccountService ,private router: Router){}

  ngOnInit(): void {
    this.id= localStorage.getItem('id').toString();
    console.log(this.id);
    
  }

  saveJobs(){
    
    this.resume.accountID = this.id;
    this.resumeService.createResume(this.resume).subscribe(data => {
      console.log(data);
      this.goToResumeList();
    })
    error => console.error();
  }

  getAccountList(){
    this.accountService.getAccList().subscribe(data => {
      this.acc = data;
    })
  }

  onSubmit(){
    this.saveJobs();
  }

  goToResumeList(){
    this.router.navigate(["/resume"]);
  }
}
