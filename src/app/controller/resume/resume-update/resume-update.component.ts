import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/service/resume/resume.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Resume } from 'src/app/model/resume';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-resume-update',
  templateUrl: './resume-update.component.html',
  styleUrls: ['./resume-update.component.css']
})
export class ResumeUpdateComponent implements OnInit{

  public Editor = ClassicEditor;
  id: number;
  resume: Resume = new Resume();

  constructor(private resumeService: ResumeService, private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.resumeService.getResumeById(this.id).subscribe(data => {
      this.resume = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.resume.createdBy = null;
    this.resume.createdDate = null;
    this.resume.modifiedDate = null;
    console.log(this.resume);
    this.resumeService.updateResume(this.id, this.resume).subscribe(data => {
      console.log(data);
      this.goToResumeList();
    }, error => console.log(error));
  }

  goToResumeList(){
    this.router.navigate(['/resume']);
  }
}
