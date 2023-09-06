import { Component, Host, Input } from '@angular/core';
import { CheckboxGroupComponent } from '../checkbox-group.component';

@Component({
  selector: 'app-checkbox',
  template: `
    <label [for]="value">{{ label }}</label>
    <input
      type="checkbox"
      [name]="value"
      [id]="value"
      (click)="checkboxGroup.toggleValue(value)"
      [checked]="checkboxGroup.isSelected(value)"
    />
  `
})
export class CheckboxComponent {
  @Input() value: string = '';
  @Input() label: string = '';

  constructor(@Host() public checkboxGroup: CheckboxGroupComponent) { }

}
