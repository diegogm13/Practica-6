import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-perfil',
    standalone: true,
    imports: [CommonModule, ButtonModule, CardModule, AvatarModule, InputTextModule],
    templateUrl: './perfil.component.html',
    styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit {
    isLoggedIn = false;
    currentUser = '';

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.isLoggedIn = this.authService.isLoggedIn();
        this.currentUser = this.authService.getCurrentUser();
    }
}
