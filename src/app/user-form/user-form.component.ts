import { Component } from '@angular/core';
import { UserDataHandlerService } from '../services/userDataHandler.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  formData:any;

  constructor(private dataServe : UserDataHandlerService){}

ngOnInit(): void {
  this.formData = new FormGroup({
    header : new FormControl('', Validators.required),
    section : new FormControl('', Validators.required)
  })
}

OnSubmit(){
  console.log(this.formData.value)
  this.dataServe.getDataList(this.formData.value)

  this.formData.reset()
}
}
