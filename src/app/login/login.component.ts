import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    validateForm!: FormGroup;

    submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        console.log(this.validateForm.controls.username.value);
        this.authService.login(
            this.validateForm.controls.username.value
            , this.validateForm.controls.password.value)
        .subscribe( result => {
            let jwt = result.headers.get('authorization').replace('Bearer ', '')
            sessionStorage.setItem("id_token", jwt);
        });

    }

    constructor(private fb: FormBuilder, private authService: AuthService) { }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true]
        });
    }
}
