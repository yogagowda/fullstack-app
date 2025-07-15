import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {
  isSubmit: boolean = false;
  currentCharCount = 0;
  ngOnInit(): void {

  }
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[\w+]+([\.-]?\w+)*\+?\d*@[\w-]+(\.\w+){1,2}$/i)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    query: new FormControl('')
  })

  success: boolean = false

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.markFormGroupTouched(this.contactForm);
      this.isSubmit = true;
      return;
    } else {
      this.success = true
      console.log(this.contactForm.value)

    }
  }


  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  updateCharacterCount(): void {
    const value = this.contactForm.get('query')?.value || '';

    this.currentCharCount = value.length;
    console.log(this.currentCharCount)
  }



}
