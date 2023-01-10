import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModuleRoutingModule } from './message-module-routing.module';
import { MainMessagePageComponent } from './Pages/main-message-page/main-message-page.component';
import { MessageFormComponent } from './Pages/message-form/message-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AllMessageComponent } from './Pages/all-messages/all-messages.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    MainMessagePageComponent,
    MessageFormComponent,
    AllMessageComponent
  ],
  imports: [
    CommonModule,
    MessageModuleRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
		MatSortModule,
  ]
})

export class MessageModuleModule { }
