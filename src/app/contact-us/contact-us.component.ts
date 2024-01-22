import { Component } from '@angular/core';
import { IUsers } from '../models/iusers';
import { UsersService } from '../Services/users.service';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;

  newUser: IUsers = {} as IUsers;
  
  constructor(private userService: UsersService) {
    

  }

  ngOnInit(): void {
  }


  sendUser() {
    const observer = {
      next: (user: IUsers) => {
        alert("Email send successfully"); // not recommended
        // Use instead Toast (snackbar: https://material.angular.io/components/snack-bar/overview), BS Alert,...
       
      },
      error: (err: Error) => { alert(err.message) }
    }

     this.userService.sendUser(this.newUser).subscribe(observer);
    
  }
}
