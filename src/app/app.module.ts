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
import {ShoppingListComponent} from './ui/shopping/shopping-list/shopping-list.component';
import {RecipeFormComponent} from './ui/recipes/recipe-form/recipe-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IngredientFormComponent} from './ui/recipes/ingredient-form/ingredient-form.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './ui/login/login/login.component';
import {RegisterComponent} from './ui/login/register/register.component';
import {JwtInterceptor} from './security/jwt-interceptor';

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
    IngredientFormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
