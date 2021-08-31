import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Driver } from 'src/app/models/Driver';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {
  
  driverForm!: FormGroup;

  constructor(private data:DataService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.driverForm = this.formBuilder.group({
      fullName: ['', Validators.required ],
      pays: ['' , [Validators.required, Validators.minLength(2)] ],
      coverImage: ['' , Validators.required],
      category: ['' , Validators.required]
    })
  }

  onSubmit(){
    const formValue = this.driverForm.value;
    const driver = new Driver(
      formValue['fullName'],
      formValue['pays'],
      formValue['coverImage'],
      formValue['category']
    )
    console.log(driver);
  }

}
