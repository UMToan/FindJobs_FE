import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/service/jobs/jobs.service';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit{

  uploadedImage: File;

  constructor(private jobsService: JobsService){}

  ngOnInit(): void {
    
  }

  public onImageUpload(e){
    this.uploadedImage = e.target.files[0];
  }

}
