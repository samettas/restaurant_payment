import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from '../orderdetails.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private  service: OrderdetailsService){ }
  fooddata : any;
  ngOnInit(): void {
    this.fooddata = this.service.fooddetails;
    
  }











  from_child(data:string)
    {
      console.log(data)
    }


}
