import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDataListComponent } from './user-data-list/user-data-list.component';
import { UserDataHandlerService } from './services/userDataHandler.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserDataListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule,
    AccordionModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserDataHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
