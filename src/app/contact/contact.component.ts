import { Component } from '@angular/core';
import { UserModel } from '../user';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  userModel= new UserModel()

  collect_user_data(){
    console.log(this.userModel)
  }
}
