import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-perfil',
    standalone: true,
    providers: [MessageService],
    imports: [CommonModule, FormsModule, ButtonModule, CardModule, AvatarModule, InputTextModule, ToastModule],
    templateUrl: './perfil.component.html',
    styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit {
    isLoggedIn = false;
    currentUser = '';
    editMode = false;

    profileName = 'Juan Developer';
    profileRole = 'Senior Developer';

    // Copias de edición
    editName = '';
    editRole = '';

    constructor(
        private authService: AuthService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.isLoggedIn = this.authService.isLoggedIn();
        this.currentUser = this.authService.getCurrentUser();
    }

    startEdit(): void {
        this.editName = this.profileName;
        this.editRole = this.profileRole;
        this.editMode = true;
    }

    saveProfile(): void {
        if (!this.editName.trim() || !this.editRole.trim()) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Campos vacíos',
                detail: 'El nombre y el rol no pueden estar vacíos.',
            });
            return;
        }

        try {
            this.profileName = this.editName.trim();
            this.profileRole = this.editRole.trim();
            this.editMode = false;
            this.messageService.add({
                severity: 'success',
                summary: 'Perfil actualizado',
                detail: 'Tus datos se guardaron correctamente.',
            });
        } catch {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'No se pudo guardar el perfil. Intenta de nuevo.',
            });
        }
    }

    cancelEdit(): void {
        this.editMode = false;
    }
}
