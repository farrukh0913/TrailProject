import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { MainPageContentComponent } from './Pages/MianPage-content/main-page-content/main-page-content.component';

const routes: Routes = [

  {
    path:'MainPage',
    component: MainPageContentComponent
  },
  {
    path: 'message',
    loadChildren: () => import('./Modules/message-module/message-module.module').then(m => m.MessageModuleModule),
    // canActivate: [AuthGuard]
  },
    // otherwise redirect to
    { path: '', redirectTo: 'MainPage', pathMatch: 'full' },
    { path: '**', redirectTo: 'MainPage'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
