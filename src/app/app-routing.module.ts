import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { MainPageContentComponent } from './Pages/MianPage-content/main-page-content/main-page-content.component';

const routes: Routes = [

  {
    path:'home',
    component: MainPageContentComponent
  },
  {
    path: 'message',
    loadChildren: () => import('./Modules/message-module/message-module.module').then(m => m.MessageModuleModule),
    // canActivate: [AuthGuard]
  },
    // otherwise redirect to
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
