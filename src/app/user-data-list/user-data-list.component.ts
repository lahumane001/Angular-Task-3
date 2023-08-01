import { Component } from '@angular/core';
import { UserDataHandlerService } from '../services/userDataHandler.service';

@Component({
  selector: 'app-user-data-list',
  templateUrl: './user-data-list.component.html',
  styleUrls: ['./user-data-list.component.css']
})
export class UserDataListComponent {

  accordianData : any[]=[];

  constructor(private dataServe : UserDataHandlerService){
    this.accordianData = this.dataServe.userDataList;
    console.log(this.accordianData)
  }
}
