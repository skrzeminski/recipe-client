import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './ui/recipes/recipes.component';
import {RecipeListComponent} from './ui/recipes/recipe-list/recipe-list.component';
import {RecipesDetailComponent} from './ui/recipes/recipes-detail/recipes-detail.component';
import {ShoppingListComponent} from './ui/shopping/shopping-list/shopping-list.component';

const appRouter: Routes = [
  {
    path: '', redirectTo: 'recipes', pathMatch: 'full'
  },
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeListComponent},
      {path: ':id', component: RecipesDetailComponent}]
    // { path: ":id/edit", component: RecipeEditComponent, canActivate: [LogininRouteGuard] }
  },
  {
    path: 'shopping-list', component: ShoppingListComponent
  }
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