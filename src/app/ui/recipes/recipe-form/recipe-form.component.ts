import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../../../model/recipe';
import {RecipeService} from '../../../service/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ingredient} from '../../../model/ingredient';
import {IngredientFormComponent} from '../ingredient-form/ingredient-form.component';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  @ViewChild(IngredientFormComponent, {static: false})
  ingredientFormComponent: IngredientFormComponent;

  editedRecipe: Recipe;
  idRecipe: number;
  editMode = false;
  recipeEditForm;
  newForm = false;
  imagePath: string;
  addIngredientClicked = false;


  constructor(private recipeService: RecipeService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.newForm = this.route.params['id'] === undefined;
    this.editMode = this.route.snapshot.paramMap.get('id') != null;
    if (!this.editMode) {
      this.editedRecipe = new Recipe();
    }
    this.initForm();
  }

  initForm() {
    if (this.editMode) {

      this.route.params.subscribe(params => {
        this.idRecipe = +params.id;
      });

      this.recipeService.getRecipeById(this.idRecipe).subscribe(data => {
        this.editedRecipe = data;
        this.recipeEditForm = new FormGroup({
          name: new FormControl(this.editedRecipe.name, Validators.required),
          imagePath: new FormControl(this.editedRecipe.imagePath, Validators.required),
          description: new FormControl(this.editedRecipe.description, Validators.required),
        });
      });
    }
    this.recipeEditForm = new FormGroup({
      name: new FormControl('', Validators.required),
      imagePath: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.editedRecipe.name = this.recipeEditForm.value.name;
    this.editedRecipe.description = this.recipeEditForm.value.description;
    this.editedRecipe.imagePath = this.recipeEditForm.value.imagePath;
    // const ingredients = this.recipeEditForm.value.ingredients;
    if (!this.editMode) {
      this.recipeService.createNewRecipe(this.editedRecipe).subscribe(() => {
        let updatedRecipes: Recipe[];
        this.recipeService.getRecipes().subscribe(data2 => {
          updatedRecipes = data2;
          this.recipeService.recipesChanged.next(updatedRecipes);
          this.router.navigate(['recipes']);
        });
      });
    } else {
      this.recipeService.updateRecipe(this.editedRecipe).subscribe(() => {
        let updatedRecipes: Recipe[];
        this.recipeService.getRecipes().subscribe(data2 => {
          updatedRecipes = data2;
          this.recipeService.recipesChanged.next(updatedRecipes);
          this.router.navigate(['recipes']);
        });
      });
    }

  }

  onCancel() {

  }

  deleteIngredient(i: number) {

  }

  onDeleteIngredient(ingredient: Ingredient) {
    this.recipeService.deleteIngredient(this.editedRecipe, ingredient);
  }

  ingredientAdded(ingredient: Ingredient) {
    this.addIngredientClicked = false;
    this.editedRecipe.ingredients.push(ingredient);
  }

  onEditIngredient(ingredient: Ingredient) {
    this.addIngredientClicked = true;
    this.ingredientFormComponent.editIngredientAction(ingredient);
  }


  ingredientEdited($event: Ingredient) {
    this.addIngredientClicked = false;
  }
}
