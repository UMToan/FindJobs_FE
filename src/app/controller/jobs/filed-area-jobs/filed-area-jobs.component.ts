import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Area } from 'src/app/area';
import { Jobs } from 'src/app/model/jobs';
import { JobsService } from 'src/app/service/jobs/jobs.service';

@Component({
  selector: 'app-filed-area-jobs',
  templateUrl: './filed-area-jobs.component.html',
  styleUrls: ['./filed-area-jobs.component.css']
})
export class FiledAreaJobsComponent implements OnInit{

  jobs: Jobs[];
  areas: Area[];
  selectAreasJobsID: any;
  constructor(private jobsService: JobsService){}
  
  ngOnInit(): void {
    
  }


  @Output() jobsID = new EventEmitter<any>()
  filedAreaJobs(e){
    this.selectAreasJobsID = e.target.value;
    this.jobsID.emit(this.selectAreasJobsID);
  }

}
