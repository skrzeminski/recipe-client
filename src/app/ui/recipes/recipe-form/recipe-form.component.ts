import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../../../model/recipe';
import {RecipeService} from '../../../service/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ingredient} from '../../../model/ingredient';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  editedRecipe: Recipe;
  idRecipe: number;
  editMode = false;
  recipeEditForm;
  newForm = false;
  imagePath: string;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.newForm = this.route.params['id'] === undefined;
    this.editMode = this.route.snapshot.paramMap.get('id') != null;
    this.initForm();
  }

  onAddIngredient() {

  }

  onSubmit() {
    this.editedRecipe.name = this.recipeEditForm.value.name;
    this.editedRecipe.description = this.recipeEditForm.value.description;
    this.editedRecipe.imagePath = this.recipeEditForm.value.imagePath;
    // const ingredients = this.recipeEditForm.value.ingredients;
    if (this.editMode) {
      // const newRecipe = new Recipe(name, description, imagePath, ingredients);
      this.recipeService.createNewRecipe(this.editedRecipe);
    }
    this.recipeService.updateRecipe(this.editedRecipe);
  }

  onCancel() {

  }

  initForm() {
    let name = '';
    let imagePath = '';
    let description = '';
    const ingredients = new FormArray([]);
    console.log('this.editMode' + this.editMode);
    if (this.editMode) {
      this.route.params.subscribe(params => {
        this.idRecipe = +params.id;
        this.editedRecipe = this.recipeService.getRecipeById(this.idRecipe);
        name = this.editedRecipe.name;
        imagePath = this.editedRecipe.imagePath;
        description = this.editedRecipe.description;
      });
    }

    // Form set up Reactive
    this.recipeEditForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients
    });
  }

  deleteIngredient(i: number) {

  }

  onDeleteIngredient(ingredient: Ingredient) {
    this.recipeService.deleteIngredient(this.editedRecipe, ingredient);
  }
}
