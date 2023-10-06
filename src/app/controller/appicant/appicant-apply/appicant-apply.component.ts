import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appicants } from 'src/app/model/applicants';
import { Jobs } from 'src/app/model/jobs';
import { ApplicantService } from 'src/app/service/appicant/applicant.service';
import { JobsService } from 'src/app/service/jobs/jobs.service';

@Component({
  selector: 'app-appicant-apply',
  templateUrl: './appicant-apply.component.html',
  styleUrls: ['./appicant-apply.component.css']
})
export class AppicantApplyComponent implements OnInit{

  appicants: Appicants = new Appicants();
  job: Jobs = new Jobs();
  jobs: Jobs[];
  id: number;

  constructor(private applicantService: ApplicantService, 
              private router: Router,
              private jobsService: JobsService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.jobsService.getJobsById(this.id).subscribe(data => {
      this.job = data;
    }, error => console.log(error));
  }


  onSubmit(){
    this.appicants.jobsID = this.id;
    this.applicantService.applyAppicant(this.id,this.appicants).subscribe(data => {
    console.log(data);
    this.router.navigate(['']);
    })
    error => console.error();
  }

  getJobsList(){
    this.jobsService.getJobsList().subscribe(data => {
      this.jobs = data;
    })
  }

  slectResumeID(resumeID: number){
    this.appicants.resumeID = resumeID;
    console.log(this.appicants);
  }


}
