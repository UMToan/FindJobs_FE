import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Jobs } from '../../../model/jobs';
import { JobsService } from 'src/app/service/jobs/jobs.service';
import { Area } from 'src/app/area';
import { AreaService } from 'src/app/service/area/area.service';
@Component({
  selector: 'app-jobs-loading',
  templateUrl: './jobs-loading.component.html',
  styleUrls: ['./jobs-loading.component.css']
})
export class JobsLoadingComponent implements OnInit{
  
  jobs: Jobs[];
  areas: Area[];
  findForm: FormGroup;
  jobsFilter: Jobs = new Jobs();

  constructor(
    private jobsService: JobsService, 
    private router: Router, 
    private fb: FormBuilder, 
    private areaService: AreaService){}
  
  ngOnInit(): void {
    this.findForm = this.fb.group({
      areaID: [''],
    });
    this.areaService.getAreasList().subscribe(data => {
      this.areas = data;
    })
    this.getJobs();
  }

  private getJobs(){
    this.jobsService.getJobsList().subscribe(data => {
      this.jobs = data;
    });
  }

  jobsDetail(id: number){
    this.router.navigate(['jobs-detail', id]);
  }

  searchText: string = '';
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
  }

  private getAreas(){
    this.areaService.getAreasList().subscribe(data => {
      this.areas = data;
     })
  }

  onFind():void{
    this.jobsFilter.areaID = this.findForm.value.areaID;
    this.jobsService.filterJobs(this.jobsFilter.areaID).subscribe(data=>{
      this.jobs = data;
    })
  };

  ChangelocationName(e){
    console.log(e.target.value);
  }
  
}
