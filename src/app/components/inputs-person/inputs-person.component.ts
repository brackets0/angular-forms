import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// TODO: interface as extra file
export interface Person {
  /**
   * The first name of the person.
   */
  firstName: string;

  /**
   * The last name of the person.
   */
  lastName: string;
}

@Component({
  selector: 'app-inputs-person',
  template: `
  <!-- TODO: rms ! -->
  <div *ngIf="form" [formGroup]="form!">
    <label for="firstName">First name:</label>
    <input type="text" placeholder="First Name" id="firstName" name="firstName" formControlName="firstName" />
    <label for="firstName" *ngIf="form!.controls['firstName']?.invalid && (form!.controls['firstName']?.dirty || form!.controls['firstName']?.touched) && form!.controls['firstName']?.errors?.['required']">First name is required.</label>
    <label for="firstName" *ngIf="form!.controls['firstName']?.invalid && (form!.controls['firstName']?.dirty || form!.controls['firstName']?.touched) && form!.controls['firstName']?.errors?.['minlength']">First name must be at least 2 characters long.</label>
    <br />
    <label for="lastName">Last name:</label>
    <input type="text" placeholder="Last Name" id="lastName" name="lastName" formControlName="lastName" />
  </div>
  `,
})
export class InputsPersonComponent {
  @Input() form: FormGroup | undefined;
  constructor() { }
}
