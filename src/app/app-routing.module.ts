import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RandomCotactPageComponent } from './pages/random-contact-page/random-contact-page.component';

const routes: Routes = [
  //main route to home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'children',
        component: HomePageComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    //subroute passing id its not a query param
    path: 'contacts/:id',
    component: ContactDetailPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'random',
    component: RandomCotactPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
