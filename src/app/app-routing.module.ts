import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TastyHomeComponent } from './tasty-home/tasty-home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TastyHomeComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
