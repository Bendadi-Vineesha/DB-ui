import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookListComponent } from './book-list/book-list.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { GetsubscribebooksofreaderComponent } from './getsubscribebooksofreader/getsubscribebooksofreader.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchbooksComponent } from './searchbooks/searchbooks.component';
import { SubscribebooksComponent } from './subscribebooks/subscribebooks.component';
import { SubscriptionbooksComponent } from './subscriptionbooks/subscriptionbooks.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
  {path:'reader',component:BookListComponent},
  //{path:'reader/:title',component:SearchbooksComponent},
  {path:'reader/*',component:SearchbooksComponent},
  {path:'subscribebook',component:SubscribebooksComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'createbook',component:CreatebookComponent,canActivate:[AuthGuard]},
  {path:'updatebook',component:UpdatebookComponent,canActivate:[AuthGuard]},
  {path:'booksubscription',component:SubscriptionbooksComponent},
  {path:'getsubscribedbooks',component:GetsubscribebooksofreaderComponent}
  // {path:'',redirectTo:'reader',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
