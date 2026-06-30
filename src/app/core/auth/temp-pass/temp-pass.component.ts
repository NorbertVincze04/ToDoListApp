import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthDivComponent } from '../../../shared/ui-wrappers/auth-div/auth-div.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temp-pass',
  standalone: true,
  imports: [AuthDivComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './temp-pass.component.html',
  styleUrl: './temp-pass.component.css',
})
export class TempPassComponent {
  tempPassForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    secretKey: new FormControl('', [Validators.required]),
  });

  generatedPassword = '';
  errorMessage = '';
  secretKeyVisible = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onGenerateTempPassword() {
    if (!this.tempPassForm.valid) {
      return;
    }

    const email = this.tempPassForm.get('email')?.value || '';
    const secretKey = this.tempPassForm.get('secretKey')?.value || '';

    this.authService.generateTempPassword(email, secretKey).subscribe({
      next: (tempPassword) => {
        this.generatedPassword = tempPassword;
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.generatedPassword = '';
      },
    });
  }

  onBackToSignIn() {
    this.router.navigate(['/login']);
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedPassword).then(() => {});
  }

  togglePasswordVisibility() {
    this.secretKeyVisible = !this.secretKeyVisible;
  }
}
