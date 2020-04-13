import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../../model/recipe';
import {RecipeService} from '../../../service/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe: Recipe;
  idRecipe: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(params => {
      this.idRecipe = +params['id'];
      this.recipeService.getRecipeById(this.idRecipe).subscribe(data => this.recipe = data);
    });
  }

  onDeleteRecipe(id: number) {
    console.log('onDeleteRecipe');
    this.recipeService.deleteRecipe(id).subscribe(data => {
      console.log('Deleted' + id);
      let recipes: Recipe[];
      this.recipeService.getRecipes().subscribe(data2 => {
        recipes = data2;
        this.recipeService.recipesChanged.next(recipes);
        this.router.navigate(['recipes']);
      });
    });
  }
}
