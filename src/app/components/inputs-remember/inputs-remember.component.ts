import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// TODO: interface as extra file
export interface Remember {
  /**
   * Whether or not to remember the user.
   */
  remember: boolean;
}

@Component({
  selector: 'app-inputs-remember',
  template: `
  <div *ngIf="form" [formGroup]="form!">
    <label for="remember">Remember me</label>
    <input type="checkbox" formControlName="remember" />
  </div>
  `,
})

export class InputsRememberComponent {
  @Input() form: FormGroup | undefined;
  constructor() { }
}
