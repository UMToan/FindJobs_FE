import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resume } from 'src/app/model/resume';
import { ResumeService } from 'src/app/service/resume/resume.service';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.css']
})
export class ResumeListComponent implements OnInit{

  resume: Resume[];

  constructor(private resumeService: ResumeService, private router: Router){}

  ngOnInit(): void {
    this.getResume();
  }

  private getResume(){
    this.resumeService.getResumeList().subscribe(data => {
      this.resume = data;
    });
  } 

  resumeUpdate(id: number){
    this.router.navigate(['resumeUpdate', id]);
  }

}
