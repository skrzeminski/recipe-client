import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../../model/recipe';
import {RecipeService} from '../../../service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    const subscription = this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
    const asd = 'ad';
  }

}
