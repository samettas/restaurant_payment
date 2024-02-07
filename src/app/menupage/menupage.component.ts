import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailsService } from '../orderdetails.service';
import { OrderModel } from '../order';



@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {
 
  orderModel= new OrderModel()

  collect_order_data(){
    console.log(this.orderModel)
    }
    
    getMenuId:any;
  menudata:any;
  constructor(private param:ActivatedRoute, private service: OrderdetailsService){ }
  ngOnInit(): void {
 this.getMenuId = this.param.snapshot.paramMap.get('id');
 console.log(this.getMenuId,'getmenu');
 if(this.getMenuId)
 {
  this.menudata = this.service.fooddetails.filter((value)=>{
     return value.id == this.getMenuId;

  });
  console.log(this.menudata,'menuData>>')
 }

 
 }
    }
  





