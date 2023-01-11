import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

// routes with lazy loading
const routes: Routes = [
  { path:'home', component: HomeComponent },
  // lazy loading
  { path: 'message', loadChildren: () => import('./Modules/message-module/message-module.module').then(m => m.MessageModuleModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
