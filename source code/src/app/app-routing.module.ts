import { AllHeroesComponent } from './components/all-heroes/all-heroes.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';
import { LayoutOneComponent } from './layouts/layout-one/layout-one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './components/not-found404/not-found404.component';

const routes: Routes = [
  {path:'', redirectTo:'HeroProfile', pathMatch:"full"},
  {
    path:'',
    component:LayoutOneComponent,
    children:[
      {path:'HeroProfile',component:HeroProfileComponent,data: { animationState: 'One' }},
      {path:'AllHeroes',component:AllHeroesComponent,data: { animationState: 'Two' }},
    ]
  },
  {path: '**', component: NotFound404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
