import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { TallerUnoComponent } from './taller-uno/taller-uno.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RatingBookComponent } from './rating-book/rating-book.component';
import { CreateBookComponent } from './create-book/create-book.component';

import { TallerDosComponent } from './taller-dos/taller-dos.component';
import { CreatePlaceComponent } from './create-place/create-place.component';
import { CreateUserTwoComponent } from './create-user-two/create-user-two.component';
import { RatingPlaceComponent } from './rating-place/rating-place.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PresentationComponent
  },  
  {
    path: 'taller-uno',
    component: TallerUnoComponent
  },
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: 'rating-books',
    component: RatingBookComponent
  },
  {
    path: 'create-book',
    component: CreateBookComponent
  },
  {
    path: 'taller-dos',
    component: TallerDosComponent
  },
  {
    path: 'create-place',
    component: CreatePlaceComponent
  },
  {
    path: 'create-user-two',
    component: CreateUserTwoComponent
  },
  {
    path: 'rating-place',
    component: RatingPlaceComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);