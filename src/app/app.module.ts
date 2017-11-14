import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


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


//Angular Materials 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

import 'rxjs/add/operator/map'

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class PlunkerMaterialModule {}



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
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatAutocompleteModule,
    PlunkerMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
    ],
  providers: [HomepageComponent],
  bootstrap: [HomepageComponent]
})
export class AppModule { }
