import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
  <form *ngIf="form" [formGroup]="form!" (ngSubmit)="onSubmit(form)">
    <app-inputs-person [form]="form"></app-inputs-person>
    <app-inputs-remember [form]="form"></app-inputs-remember>
    <hr>
    <app-checkbox-group formControlName="needs">
      <app-checkbox value="typescript" label="Type Script"></app-checkbox>
      <app-checkbox value="html" label="HTML"></app-checkbox>
      <app-checkbox value="scss" label="SCSS"></app-checkbox>
    </app-checkbox-group>
    <hr>
    <button type="submit" [disabled]="form.invalid">Submit</button>
  </form>
  `,
})

export class FormComponent {
  form: FormGroup | undefined;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', Validators.required],
      remember: [''],
      needs: [[]],
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.getRawValue());
  }

}
