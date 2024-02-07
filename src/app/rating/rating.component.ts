import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.ratingx)
    this.outer_width=this.ratingx*this.outer_width  
   }
 
   @Input() ratingx :number=0
   outer_width:number=16
 
   @Output() to_parent=new EventEmitter <string>();
 
   send_to_parent()
   {
     this.to_parent.emit("hello_parent")
   }
 
}
