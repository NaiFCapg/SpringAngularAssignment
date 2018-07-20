import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public UserInfo;
  constructor(
    private registerService: RegisterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUserInfo(this.route.snapshot.params.id);
  }

  getUserInfo(id:number){
    this.registerService.getUserInfo(id).subscribe(
      data => {
        this.UserInfo = data;
        //console.log('data loading finished')
      },
      err => console.error(err),
      () => console.log('UserInfo loaded')
    )
  }
}
