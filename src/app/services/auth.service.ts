import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }


    login(username, password){
        const formData = new FormData;
        formData.append('username', username);
        formData.append('password', password);
        return this.http.post(
            'http://localhost:8080/login'
            , formData
            , {observe: 'response'});
    }
}
