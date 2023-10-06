import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Area } from 'src/app/area';
import { AreaService } from 'src/app/service/area/area.service';

@Component({
  selector: 'app-area-drop-down-list',
  templateUrl: './area-drop-down-list.component.html',
  styleUrls: ['./area-drop-down-list.component.css']
})
export class AreaDropDownListComponent implements OnInit {
  
  areas: Area[];
  SelectValue: any;
  @Output() areaID = new EventEmitter<number>()
  ChangelocationName(e){
    console.log(e.target.value);
    this.SelectValue =  e.target.value;
    this.areaID.emit(this.SelectValue);
  }

  constructor(private areaService: AreaService){}

  ngOnInit(): void {
    this.areaService.getAreasList().subscribe(data => {
      this.areas = data;
    })
  }
}
