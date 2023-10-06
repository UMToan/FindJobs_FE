import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobs } from '../../../model/jobs';
import { JobsService } from 'src/app/service/jobs/jobs.service';
@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  jobs: Jobs[];

  constructor(private jobsService: JobsService, private router: Router){}

  ngOnInit(): void {
    this.getJobs();
  }

  private getJobs(){
    this.jobsService.getJobsList().subscribe(data => {
      this.jobs = data;
    });
  }

  jobsUpdate(id: number){
    this.router.navigate(['jobs-update', id]);
  }

  jobsDetail(id: number){
    this.router.navigate(['jobs-detail', id]);
  }

}
