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
      this.recipe = this.recipeService.getRecipeById(this.idRecipe);
    });
  }

  onDeleteRecipe(id: number) {
    console.log('onDeleteRecipe');
    this.recipeService.deleteRecipe(id);
    this.router.navigate(['recipes']);
  }
}
