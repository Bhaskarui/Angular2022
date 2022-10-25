import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeObsTopicComponent } from './home-obs-topic/home-obs-topic.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ServerComponent } from './server/server.component';
import { EditServerComponent } from './servers-route/edit-server/edit-server.component';
import { Server1Component } from './servers-route/server1/server1.component';
import { ServersRouteComponent } from './servers-route/servers-route.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UserObsTopicComponent } from './user-obs-topic/user-obs-topic.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'users', component: UsersComponent, children:[
//     { path: ':id/:name', component: UserComponent }
//   ] },

  // { path: 'servers',
  //  canActivate:[AuthGuardService], 
  // canActivateChild: [AuthGuardService],
  //  component: ServersRouteComponent, children :[
  //   { path: ':id', component: Server1Component },
  //   { path: ':id/edit', component: EditServerComponent }
  // ] },
//  {path: 'not-found', component:PageNotFoundComponent},
// {path: 'not-found', component:ErrorPageComponent , data: {message:'Page not found!'}},
//  {path: '**', redirectTo: '/not-found'}
// ];

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: ':id', component: RecipesDetailComponent },
      { path: 'rec-edit', component: RecipeEditComponent },
      { path: ':id/edit', component: RecipeEditComponent }

    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent }
];

// const routes: Routes = [{ path: '', redirectTo: '/home-obs', pathMatch: 'full' },
// { path: 'home-obs', component: HomeObsTopicComponent },
// { path: 'user-1', component: UserObsTopicComponent, children:[{
//   path: ':id',component: UserObsTopicComponent
// }] }
// ]

// const routes:Routes =[{}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
