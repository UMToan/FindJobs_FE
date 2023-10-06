import { Component, OnInit } from '@angular/core';
import {Area} from '../../../area'
import { AreaService } from 'src/app/service/area/area.service';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-area-create',
  templateUrl: './area-create.component.html',
  styleUrls: ['./area-create.component.css']
})
export class AreaCreateComponent implements OnInit{
  public Editor = ClassicEditor;
  area: Area = new Area();
  constructor(private areaService: AreaService, private router: Router){}

  ngOnInit(): void {
  }

  saveArea(){
    this.areaService.createAreas(this.area).subscribe(data => {
      console.log(data);
      this.goToAreaList();
    })
    error => console.error();
    
  }

  goToAreaList(){
    this.router.navigate(['/areas']);
  }

  onSubmit(){
    console.log(this.area);
    this.saveArea();
  }

  
}
