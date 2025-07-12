import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer  {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    query: new FormControl('', [Validators.required, Validators.minLength(10)])
  })
  isSubmit: boolean = false;
  success:boolean =false

  onSubmit(): void {
  this.isSubmit = true;

  if (this.contactForm.invalid) {
    return;
  }
}



}
