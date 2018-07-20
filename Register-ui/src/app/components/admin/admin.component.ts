import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public usersInfo;
  public search:string;
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.getUsersInfo();
    this.search = '';
  }

  getUsersInfo(){
    this.registerService.getUsersInfo().subscribe(
      data => {this.usersInfo = data},
      err => console.error(err),
      () => console.log('usersInfo loaded')
    );
  }

}
