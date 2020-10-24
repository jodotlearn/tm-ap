import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedZorroModule } from './shared-zorro/shared-zorro.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule
        , AppRoutingModule
        , HttpClientModule
        , SharedZorroModule
        , FormsModule
        , ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
