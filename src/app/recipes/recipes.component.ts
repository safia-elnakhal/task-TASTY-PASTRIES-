import { Component } from '@angular/core';
import { RecipesService } from '../Services/recipes.service';
import { IRecipese } from '../models/irecipese';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  respiesList: IRecipese[] = [];
  constructor(private resService: RecipesService,
    
  ) { }
  
  ngOnChange(): void{
    
  }
  ngOnInit(): void {
    this.resService.getAllRecipes()
      .subscribe(meals => {
        this.respiesList = meals
        console.log(this.respiesList)
    })
  }

}
