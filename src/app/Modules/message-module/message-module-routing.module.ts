import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMessagePageComponent } from './Pages/main-message-page/main-message-page.component';

const messageRoutes: Routes = [
  { path: '', component: MainMessagePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(messageRoutes)],
  exports: [RouterModule]
})

export class MessageModuleRoutingModule { }
