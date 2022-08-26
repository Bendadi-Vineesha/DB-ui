import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchbooksComponent } from './searchbooks/searchbooks.component';
import { SubscribebooksComponent } from './subscribebooks/subscribebooks.component';
import { RegisterComponent } from './register/register.component';
import{ FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { SubscriptionbooksComponent } from './subscriptionbooks/subscriptionbooks.component';
import { GetsubscribebooksofreaderComponent } from './getsubscribebooksofreader/getsubscribebooksofreader.component'
import { AuthGuard } from './auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    SearchbooksComponent,
    SubscribebooksComponent,
    RegisterComponent,
    LoginComponent,
    CreatebookComponent,
    UpdatebookComponent,
    SubscriptionbooksComponent,
    GetsubscribebooksofreaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
