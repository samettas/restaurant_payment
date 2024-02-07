import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from '../orderdetails.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  fooddetails: any;



  constructor( private service:OrderdetailsService, private router:ActivatedRoute){}
  fooddata:any;
  ngOnInit(): void {
    this.fooddata = this.service.fooddetails;
  }

//   filtered_menu=this.fooddata
//   _menu_name=""
//   get menu_name(){
//     return this._menu_name
//   }
// set menu_name(menu_name){
//   this._menu_name=menu_name
//   console.log(this._menu_name)
//   this.filtered_menu=this.fooddata.filter(fooddata=>fooddata.foodname.toLocalLowerCase().include(menu_name.toLocaleLowerCase()))
// }







  from_child(data:string)
    {
      console.log(data)
    }

    
 

}
