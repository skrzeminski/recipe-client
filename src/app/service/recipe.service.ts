import {Injectable} from '@angular/core';
import {Recipe} from '../model/recipe';
import {Observable, Subject} from 'rxjs';
import {Ingredient} from '../model/ingredient';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  RECIPE_URL = 'http://localhost:8080/recipes/';
  recipesChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Recipe1',
      description: 'description1',
      imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKhdrL3vDfE4yb_GsbswUytI1toWWar0rPU3aBNvpVUqdxMxUs&usqp=CAU',
      ingredients: [
        {id: 1, name: 'Milk', amount: 2},
        {id: 2, name: 'Suger', amount: 3}
      ]
    },
    {
      id: 2,
      name: 'Recipe2',
      description: 'description2',
      imagePath: 'data:image/jpeg;base64,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',
      ingredients: [
        {id: 3, name: 'Salt', amount: 3},
        {id: 4, name: 'Milk', amount: 4}
      ]
    },
    {
      id: 3,
      name: 'Recipe3',
      description: 'description3',
      imagePath: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-dinner-ideas-tofu-bowl-1574613204.jpg?crop=0.811xw:0.541xh;0.0737xw,0.247xh&resize=640:*',
      ingredients: [
        {id: 5, name: 'Pepper', amount: 1},
        {id: 6, name: 'Potato', amount: 2}
      ]
    },
    {
      id: 4,
      name: 'Recipe4',
      description: 'description4',
      imagePath: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1548964409%2Fquesadizzas-FT-RECIPE0319.jpg%3Fitok%3DutTcRHNM',
      ingredients: [
        {id: 5, name: 'Banana', amount: 3},
        {id: 6, name: 'Apple', amount: 5}
      ]
    }];

  constructor(private httpClient: HttpClient) {
  }

  /** GET recipes from the server */
  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.RECIPE_URL);
  }

  createNewRecipe(recipe: Recipe) {
    return this.httpClient.post<Recipe>(this.RECIPE_URL, recipe);
  }

  getRecipeById(id: number): Observable<Recipe> {
    const url = this.RECIPE_URL + '/' + id;
    return this.httpClient.get<Recipe>(url);
  }

  deleteRecipe(id: number) {
    const url = this.RECIPE_URL + '/' + id;
    return this.httpClient.delete<Recipe>(url);
  }

  updateRecipe(recipe: Recipe) {
    const url = this.RECIPE_URL + '/' + recipe.id;
    return this.httpClient.put<Recipe>(url, recipe);
  }

  deleteIngredient(recipe: Recipe, ingredient: Ingredient) {
    // const foundRecipe = this.getRecipeById(recipe.id);
    // foundRecipe.ingredients = foundRecipe.ingredients.filter(ing => ing.id !== ingredient.id);
  }
}
