import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router) {
    }

    validateForm!: FormGroup;

    submitForm(): void {
        for (const i of Object.keys(this.validateForm.controls)) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (!this.validateForm.invalid){
            if (environment.production){
                this.authService.login(
                    this.validateForm.controls.username.value, this.validateForm.controls.password.value)
                .subscribe( result => {
                    const jwt = result.headers.get('authorization').replace('Bearer ', '');
                    this.authService.storeToken(jwt);
                    this.router.navigate(['']);
                });
            } else {
                this.authService.storeToken('only_for_dev_testing');
                this.router.navigate(['']);
            }
        }

    }
    ngOnInit(): void {
        this.validateForm = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true]
        });
    }
}
