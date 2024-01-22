import { Component } from '@angular/core';
 import { faSquareFacebook  ,faGoogleWallet ,faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-tasty-home',
  templateUrl: './tasty-home.component.html',
  styleUrls: ['./tasty-home.component.css']
})
export class TastyHomeComponent {
   faGoogleWallet = faGoogleWallet;
  faSquareFacebook = faSquareFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

}
