import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Input()
  recipe: Recipe;
  @Input()
  isEditForm = false;
  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();
  @Output()
  ingredientEdited = new EventEmitter<Ingredient>();

  ingredientForm;
  private ingredient: Ingredient;


  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private  router: Router) {
  }

  ngOnInit() {
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
    if (!this.isEditForm) {
      this.ingredient = new Ingredient(name, amount);
      this.ingredientAdded.emit(this.ingredient);
      this.ingredientForm.reset();
    } else {
      this.ingredient.name = name;
      this.ingredient.amount = amount;
      this.ingredientEdited.emit(this.ingredient);
      this.ingredientForm.reset();
    }

  }

  editIngredientAction(ingredient: Ingredient) {
    this.ingredient = ingredient;
    this.isEditForm = true;
    this.ingredientForm = new FormGroup({
      name: new FormControl(ingredient.name, Validators.required),
      amount: new FormControl(ingredient.amount, Validators.required)
    });
  }
}
