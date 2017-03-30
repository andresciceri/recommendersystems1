import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { RatingModule, TabsModule } from 'ng2-bootstrap';
import { ChartModule, GrowlModule } from 'primeng/primeng';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { apipaths } from './app.apis';

import { UserService }          from './create-user/user.service';
import { BookService }          from './create-book/book.service';
import { RatingService }          from './rating-book/rating.service';
import { ResultsService }          from './taller-uno/results.service';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TallerUnoComponent } from './taller-uno/taller-uno.component';
import { TallerDosComponent } from './taller-dos/taller-dos.component';
import { TallerTresComponent } from './taller-tres/taller-tres.component';
import { PresentationComponent } from './presentation/presentation.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RatingBookComponent } from './rating-book/rating-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CreatePlaceComponent } from './create-place/create-place.component';
import { CreateUserTwoComponent } from './create-user-two/create-user-two.component';
import { RatingPlaceComponent } from './rating-place/rating-place.component';



@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    TallerUnoComponent,
    TallerDosComponent,
    TallerTresComponent,
    PresentationComponent,
    CreateUserComponent,
    RatingBookComponent,
    CreateBookComponent,
    CreatePlaceComponent,
    CreateUserTwoComponent,
    RatingPlaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing,
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    ChartModule,
    GrowlModule,
    
  ],
  providers: [UserService,BookService, RatingService, ResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
