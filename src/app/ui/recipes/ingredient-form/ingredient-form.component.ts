import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../../../model/recipe';
import {RecipeService} from '../../../service/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ingredient} from '../../../model/ingredient';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {


  recipe: Recipe;
  ingredientForm;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private  router: Router) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
        const id = params['id'];
        this.recipe = this.recipeService.getRecipeById(+id);
      }
    );
    console.log('recipe' + JSON.stringify(this.recipe));

    const name = '';
    const amount = '';
    this.ingredientForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      amount: new FormControl(amount, Validators.required)
    });
  }

  onSubmit() {
    const name = this.ingredientForm.value.name;
    const amount = this.ingredientForm.value.amount;
    // tslint:disable-next-line:label-position
    const newIngredient = new Ingredient(name, amount);
    this.recipe.ingredients.push(newIngredient);
    this.recipeService.updateRecipe(this.recipe);
    this.router.navigate(['recipes', this.recipe.id, 'edit']);
  }

}
