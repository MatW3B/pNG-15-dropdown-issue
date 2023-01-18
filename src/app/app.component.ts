import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  template: `
  <p-dropdown [options]="selectOpts"></p-dropdown>
  `,
  styles: []
})
export class AppComponent {
  title = 'primeNGissues';
  public selectOpts: SelectItem[] = [
    { value: 'a', label: 'a' },
    { value: 'b', label: 'b' }
];
}
