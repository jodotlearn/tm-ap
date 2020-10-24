import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
    {
        path: ''
        , canActivate: [AuthGuard]
        , component: HomeComponent
    }
    , {
        path: 'login'
        , component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
