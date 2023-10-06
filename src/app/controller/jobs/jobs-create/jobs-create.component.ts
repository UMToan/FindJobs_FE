import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/model/jobs';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { JobsService } from 'src/app/service/jobs/jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs-create',
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.css']
})
export class JobsCreateComponent implements OnInit{
  public Editor = ClassicEditor;
  job: Jobs = new Jobs();
  
  constructor(private jobsService: JobsService, private router: Router){}

  ngOnInit(): void {
    this.job.status = 0;
    
  }

  saveJobs(){
    window.location.href="http://localhost:8080/api-admin-jobs/"+this.job.areaID+"/"
    +this.job.jobsTitle+"/"+this.job.jobsStatus+"/"+this.job.company+"/"+this.job.thumbnail+"/"
    +this.job.jobsLocation+"/"+this.job.jobsMail+"/"+this.job.jobsDescription+"/"
    +this.job.jobsResponsibilities+"/"+this.job.salary+"/"+this.job.jobsType+"/"+this.job.jobsSkill+"/"
    +this.job.createdDate+"/"+this.job.createdBy;

    
    // this.jobsService.createJobs(this.job).subscribe(data => {
    //   console.log(data);
    //   this.goToJobsList();
    // })
    // error => console.error();
  }

  goToJobsList(){
    this.router.navigate(["/jobs"]);
  }

  onSubmit(){
    this.saveJobs();
  }

  slectAreaID(areaID: number){
    this.job.areaID = areaID;
    console.log(this.job);
  }
}
