import { Component, OnInit } from '@angular/core';
import {Area} from '../../../area'
import { AreaService } from '../../../service/area/area.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit{

  areas: Area[];

  constructor(private areaService: AreaService, private router: Router){}

  ngOnInit(): void{
    this.getAreas();
  }

  private getAreas(){
    this.areaService.getAreasList().subscribe(data => {
      this.areas = data;
    });
  } 

  areaUpdate(id: number){
    this.router.navigate(['areas-update', id]);
  }
}
