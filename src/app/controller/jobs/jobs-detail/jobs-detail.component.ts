import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from 'src/app/model/jobs';
import { JobsService } from 'src/app/service/jobs/jobs.service';

@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html',
  styleUrls: ['./jobs-detail.component.css']
})
export class JobsDetailComponent implements OnInit{
  
  id: number;
  job: Jobs;
  
  constructor(private route: ActivatedRoute, private jobsServicer: JobsService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.job = new Jobs();
    this.jobsServicer.getJobsById(this.id).subscribe(data => {
      this.job = data;
    })
  }

  jobsAppicantDetail(id: number){
    this.router.navigate(['apply', id]);
  }
}
