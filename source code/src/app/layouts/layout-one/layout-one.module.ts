import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutOneComponent } from './layout-one.component';
import { AllHeroesComponent } from 'src/app/components/all-heroes/all-heroes.component';
import { HeroProfileComponent } from 'src/app/components/hero-profile/hero-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesModule } from 'src/app/core/services/services.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatSortModule} from '@angular/material/sort';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LayoutOneComponent,
    AllHeroesComponent,
    HeroProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ServicesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatCheckboxModule,
    MatSortModule,
    TranslateModule
  ]
})
export class LayoutOneModule { }
