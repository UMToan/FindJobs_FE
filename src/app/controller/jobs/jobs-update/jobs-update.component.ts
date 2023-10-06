import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from '../../../model/jobs';
import { JobsService } from 'src/app/service/jobs/jobs.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-jobs-update',
  templateUrl: './jobs-update.component.html',
  styleUrls: ['./jobs-update.component.css']
})
export class JobsUpdateComponent implements OnInit{

  public Editor = ClassicEditor;
  id: number;
  job: Jobs = new Jobs();

  constructor(private jobsService: JobsService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.jobsService.getJobsById(this.id).subscribe(data => {
      this.job = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.job.createdBy = null;
    this.job.modifiedBy = null;
    this.job.createdDate = null;
    this.job.modifiedDate = null;
    console.log(this.job);
    this.jobsService.updateJobs(this.id, this.job).subscribe(data => {
      console.log(data);
      this.goToJobList();
    }, error => console.log(error));
  }

  slectAreaID(areaID: number){
    this.job.areaID = areaID;
    console.log(this.job);
    
  }

  goToJobList(){
    this.router.navigate(['/jobs']);
  }
}
