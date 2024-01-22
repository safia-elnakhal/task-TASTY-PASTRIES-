import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IRecipese } from '../models/irecipese';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private httpClient:HttpClient) { }

  getAllRecipes():Observable<IRecipese[]>  { 
    return this.httpClient.get<IRecipese[]>
      ('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast').pipe(
        map((response: any) => response.meals)
      );
  }
  


  getRecipesById(MaelId:number){}
}
