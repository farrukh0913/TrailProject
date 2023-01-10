import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMessageComponent } from './Pages/all-messages/all-messages.component';
import { MainMessagePageComponent } from './Pages/main-message-page/main-message-page.component';

const messageRoutes: Routes = [
  {
    path:'',
    component:MainMessagePageComponent
  },
  {
    path:'allMessage',
    component:AllMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(messageRoutes)],
  exports: [RouterModule]
})
export class MessageModuleRoutingModule { }
