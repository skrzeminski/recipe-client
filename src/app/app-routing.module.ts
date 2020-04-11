import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './ui/recipes/recipes.component';
import {RecipesDetailComponent} from './ui/recipes/recipes-detail/recipes-detail.component';
import {ShoppingListComponent} from './ui/shopping/shopping-list/shopping-list.component';
import {RecipeFormComponent} from './ui/recipes/recipe-form/recipe-form.component';
import {IngredientFormComponent} from './ui/recipes/ingredient-form/ingredient-form.component';

const appRouter: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'shopping-list', component: ShoppingListComponent},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: 'new', component: RecipeFormComponent},
      {
        path: ':id/edit', component: RecipeFormComponent, children: [
          {path: ':newIngredient', component: IngredientFormComponent}
        ]
      },
      {path: ':id', component: RecipesDetailComponent},
    ]
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
