import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { RecipesComponent } from './ui/recipes/recipes.component';
import { RecipeListComponent } from './ui/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './ui/recipes/recipe-item/recipe-item.component';
import { RecipesDetailComponent } from './ui/recipes/recipes-detail/recipes-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
