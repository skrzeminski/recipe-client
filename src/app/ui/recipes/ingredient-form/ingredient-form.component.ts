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
  ingredientForm;

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
    const newIngredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(newIngredient);
  }
}
