import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }


    login(username: string, password: string): any{
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        return this.http.post(
            'http://localhost:8080/login'
            , formData
            , {observe: 'response'});
    }

    storeToken(token: string): void {
        sessionStorage.setItem('id_token', token);
    }

    removeToken(): void {
        sessionStorage.removeItem('id_token');

    }

    // checkTokenExist(): boolean {
    //     const token = sessionStorage.getItem('id_token');
    //     return token ? true : false;
    // }

    isLogin(): boolean {
        const token = sessionStorage.getItem('id_token');
        return token !== null ? true : false;
    }
}
