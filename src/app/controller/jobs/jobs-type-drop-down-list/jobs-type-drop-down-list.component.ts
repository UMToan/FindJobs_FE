import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Jobs } from 'src/app/model/jobs';
import { JobsService } from 'src/app/service/jobs/jobs.service';

@Component({
  selector: 'app-jobs-type-drop-down-list',
  templateUrl: './jobs-type-drop-down-list.component.html',
  styleUrls: ['./jobs-type-drop-down-list.component.css']
})
export class JobsTypeDropDownListComponent implements OnInit {
  
  jobs: Jobs[];
  SelectValue: any;

  @Output() id = new EventEmitter<number>()

  ChangelocationName(e){
    console.log(e.target.value);
    this.SelectValue =  e.target.value;
    this.id.emit(this.SelectValue);
  }

  constructor(private jobsService: JobsService){}
  
  ngOnInit(): void {
    this.jobsService.getJobsList().subscribe(data => {
      this.jobs = data;
    })
  }

}
