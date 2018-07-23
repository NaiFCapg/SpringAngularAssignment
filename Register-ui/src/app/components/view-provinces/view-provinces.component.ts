import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-view-provinces',
  templateUrl: './view-provinces.component.html',
  styleUrls: ['./view-provinces.component.css']
})
export class ViewProvincesComponent implements OnInit {

  public provinces;
  addProvince: string;
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.getProvinces();
    
  }

  getProvinces(){
    this.registerService.getProvinces().subscribe(
      data => {this.provinces = data},
      err => console.error(err),
      () => this.provinces.sort((a, b) => a.province.localeCompare(b.province))
    );
  }

}
