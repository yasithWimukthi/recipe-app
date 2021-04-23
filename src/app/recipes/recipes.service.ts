import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] =[
    {
      id:'recipe-1',
      title : 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/220px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients:['French Fries','Pork Meat','Salad']
    },
    {
      id:'recipe-2',
      title : 'Spaghetti',
      imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
      ingredients:['Spaghetti','Meat','Tomatoes']
    }
  ];

  public recipeSubject = new BehaviorSubject([]);

  constructor() { }

  getAllRecipes = ()=> {
    return [...this.recipes]
  }

  getRecipe(id:string){
    return{
      ...this.recipes.find(recipe => {
        return recipe.id === id;
      })
    };
  }

  deleteRecipe(id:string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== id;
    })
    this.recipeSubject.next(this.recipes);
  }
}
