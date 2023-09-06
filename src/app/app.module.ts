import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { InputsPersonComponent } from './components/inputs-person/inputs-person.component';
import { InputsRememberComponent } from './components/inputs-remember/inputs-remember.component';
import { CheckboxComponent } from './components/checkbox-group/checkbox/checkbox.component';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InputsPersonComponent,
    InputsRememberComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
