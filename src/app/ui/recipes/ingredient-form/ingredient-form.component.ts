import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../../../model/recipe';
import {RecipeService} from '../../../service/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {

  @Input()
  recipe: Recipe;
  ingredientForm;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private  rauter: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        const id = params.id;
        this.recipe = this.recipeService.getRecipeById(id);
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

  }

  addIngredient() {

  }
}
