import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from 'src/app/model/jobs';
import { JobsService } from 'src/app/service/jobs/jobs.service';
@Component({
  selector: 'app-jobs-search',
  templateUrl: './jobs-search.component.html',
  styleUrls: ['./jobs-search.component.css']
})
export class JobsSearchComponent implements OnInit{
  
  searchResult:undefined|Jobs[]

  
  constructor(private activeroute: ActivatedRoute, private jobsSerive: JobsService, private router: Router){}
  
  ngOnInit(): void {
    // let query = this.activeroute.snapshot.paramMap.get('query');
    // console.warn(query);
    // query && this.jobsSerive.searchJobs(query).subscribe((result)=>{
      //   this.searchResult = result;
      // })
    }
    
    jobsDetail(id: number){
      this.router.navigate(['jobs-detail', id]);
    }
    

  searchValue: string = '';

  @Output()

    searchTextChange: EventEmitter<string> = new EventEmitter<string>();

    onSearchTextChange(){
      this.searchTextChange.emit(this.searchValue);
    }
}
