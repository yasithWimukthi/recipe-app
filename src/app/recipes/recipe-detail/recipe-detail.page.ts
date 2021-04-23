import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipesService} from "../recipes.service";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe : Recipe;

  constructor(
    private activatedRoute:ActivatedRoute,
    private recipeService:RecipesService,
    private router:Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('recipeId')){
        return;
      }
      const recipeID = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeID);
    })
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes']).then(r => console.log(r));
  }
}
