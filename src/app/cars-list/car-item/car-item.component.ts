import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  bookingMessage:string = "Réserver tout de suite !";

  isBooked:boolean = false ;

  @Input() car:any;
  
  constructor() { }

  ngOnInit(): void {
  }

  onBooking(){
    this.isBooked = true;
    this.bookingMessage = " Cette voiture est réservée ! "
  }

  
}
