import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/models/Driver';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {
  
  pilote: Driver = new Driver("david hasselhoff", "allemand","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWzXZDb2kx4c_JE3QpuE7iC0y2q97CWUtnEsFEs4a1J4HVxVkYQFPlxDFqfK2feUhP3I&usqp=CAU","formule 1");

  constructor(private data:DataService) { }

  ngOnInit(): void {

    this.data.addDriver(this.pilote);
  }

}
