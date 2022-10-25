import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { UsernameComponent } from './username/username.component';
import { DirectivesAssignmentComponent } from './directives-assignment/directives-assignment.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { HighLightDirective } from './high-light/high-light.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { AccountService } from './account.service';
import { LogginService } from './logging.service';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterService } from './counter.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersRouteComponent } from './servers-route/servers-route.component';
import { EditServerComponent } from './servers-route/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { Server1Component } from './servers-route/server1/server1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { HomeObsTopicComponent } from './home-obs-topic/home-obs-topic.component';
import { UserObsTopicComponent } from './user-obs-topic/user-obs-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UsernameComponent,
    DirectivesAssignmentComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    HighLightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    NewAccountComponent,
    AccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HomeComponent,
    UsersComponent,
    ServersRouteComponent,
    EditServerComponent,
    UserComponent,
    Server1Component,
    PageNotFoundComponent,
    ErrorPageComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    HomeObsTopicComponent,
    UserObsTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ AccountService,
                LogginService, 
                CounterService, 
                ShoppingListService,
                AuthService,
                AuthGuardService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
