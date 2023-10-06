import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appicants } from 'src/app/model/applicants';
import { ApplicantService } from 'src/app/service/appicant/applicant.service';

@Component({
  selector: 'app-appicant-list',
  templateUrl: './appicant-list.component.html',
  styleUrls: ['./appicant-list.component.css']
})
export class AppicantListComponent implements OnInit{

  applicants: Appicants[];

  constructor(private appicantService: ApplicantService, private router: Router){}

  ngOnInit(): void {
    this.getAppicant();
  }

  private getAppicant(){
    this.appicantService.getApplicantList().subscribe(data => {
      this.applicants = data;
    })
  }

}
