import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Resume } from 'src/app/model/resume';
import { ResumeService } from 'src/app/service/resume/resume.service';

@Component({
  selector: 'app-resume-drop-down-list',
  templateUrl: './resume-drop-down-list.component.html',
  styleUrls: ['./resume-drop-down-list.component.css']
})
export class ResumeDropDownListComponent implements OnInit{

  resume: Resume[];
  SelectValue: any;

  @Output() resumeID = new EventEmitter<number>()

  ChangeresumeName(e){
    console.log(e.target.value);
    this.SelectValue =  e.target.value;
    this.resumeID.emit(this.SelectValue);
  }

  constructor(private resumeService: ResumeService) {}


  ngOnInit(): void {
    this.resumeService.getResumeList().subscribe(data => {
      this.resume = data;
    })
  }

}
