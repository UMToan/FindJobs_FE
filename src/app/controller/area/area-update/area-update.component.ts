import {OnInit, Component } from '@angular/core';
import {Area} from '../../../area'
import { AreaService } from '../../../service/area/area.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-area-update',
  templateUrl: './area-update.component.html',
  styleUrls: ['./area-update.component.css']
})
export class AreaUpdateComponent implements OnInit{
  id: number;
  area: Area = new Area();

  constructor(private areaService: AreaService, private route: ActivatedRoute, private router: Router ) {
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.areaService.getAreasById(this.id).subscribe(data => {
      this.area = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.area.createdBy = null;
    this.area.modifiedBy = null;
    this.area.createdDate = null;
    this.area.modifiedDate = null;
    console.log(this.area);
    this.areaService.updateAreas(this.id, this.area).subscribe(data => {
      console.log(data);
      this.goToAreaList();
    }, error => console.log(error));

  }

  goToAreaList(){
    this.router.navigate(['/areas']);
  }
}
