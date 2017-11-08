import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IngredientsPageComponent } from './ingredients-page/ingredients-page.component';
import { RecipeRowComponent } from './recipe-row/recipe-row.component';
import { IngredientsRowComponent } from './ingredients-row/ingredients-row.component';
import { RecipeImageComponent } from './recipe-image/recipe-image.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    IngredientsPageComponent,
    RecipeRowComponent,
    IngredientsRowComponent,
    RecipeImageComponent,
    RecipeListComponent,
    IngredientsListComponent,
    RecipePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
