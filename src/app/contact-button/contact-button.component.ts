import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';



@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.css']
})
export class ContactButtonComponent {
  constructor(private viewportScroller: ViewportScroller) {
    
  }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
  

}
