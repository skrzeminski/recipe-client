import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../../../model/recipe';
import {RecipeService} from '../../../service/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

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
    const name = this.recipeEditForm.value.name;
    const description = this.recipeEditForm.value.description;
    const imagePath = this.recipeEditForm.value.imagePath;
    const ingredients = this.recipeEditForm.value.ingredients;
    const newRecipe = new Recipe(name, description, imagePath, ingredients);
    this.recipeService.createNewRecipe(newRecipe);
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
        const recipeById = this.recipeService.getRecipeById(this.idRecipe);
        name = recipeById.name;
        imagePath = recipeById.imagePath;
        description = recipeById.description;
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
}
