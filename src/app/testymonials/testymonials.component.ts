import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Testimonials } from 'src/app/models/testimonials';


@Component({
  selector: 'app-testymonials',
  templateUrl: './testymonials.component.html',
  styleUrls: ['./testymonials.component.css']
})
export class TestymonialsComponent {
  faStar = faStar;

  testiList: Testimonials[] = [];
  


  constructor() {
    this.testiList = [
    {id:1,name:"Kathryn Murphy",opinion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" },
      { id: 2, name: "Kathryn Murphy", opinion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" },
      {id:3,name:"Kathryn Murphy",opinion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" },
      {id:4,name:"Kathryn Murphy",opinion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" },
    ]

  }

}
