import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit{

    userProfile: any;

constructor(private userDataService: UserDataService) { }

ngOnInit() {
    this.userProfile = this.userDataService.getUserData();
}

}
