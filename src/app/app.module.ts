import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './ui/header/header.component';
import {RecipesComponent} from './ui/recipes/recipes.component';
import {RecipeListComponent} from './ui/recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './ui/recipes/recipe-item/recipe-item.component';
import {RecipesDetailComponent} from './ui/recipes/recipes-detail/recipes-detail.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { ShoppingListComponent } from './ui/shopping/shopping-list/shopping-list.component';
import { RecipeFormComponent } from './ui/recipes/recipe-form/recipe-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { IngredientFormComponent } from './ui/recipes/ingredient-form/ingredient-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesDetailComponent,
    ShoppingListComponent,
    RecipeFormComponent,
    IngredientFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
