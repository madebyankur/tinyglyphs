import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-flag',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 16 16"
      fill="none"
      [attr.stroke]="color"
      [attr.stroke-width]="actualStrokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      [class]="'icon ' + (class || '')"
    >
      <path d="M1.75023 14.8112V0.811157M1.75021 2.81116L2.20974 2.35163C3.56497 0.996399 5.79732 1.12004 6.9946 2.61664C8.00007 3.87348 9.7799 4.19334 11.1601 3.36524L13.7502 1.81116L12.5836 5.26962C12.2251 6.3325 12.4895 7.50659 13.269 8.31321L13.7502 8.81116L12.9195 9.43417C11.0203 10.8586 8.42924 10.9305 6.45392 9.61363L5.61073 9.0515C4.46024 8.2845 2.98696 8.19278 1.75021 8.81116" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class FlagIconComponent {
  @Input() size: number | string = 16;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 1;
  @Input() absoluteStrokeWidth: boolean = false;
  @Input() class: string = '';

  get actualStrokeWidth(): number | string {
    return this.absoluteStrokeWidth
      ? Number(this.strokeWidth) * (16 / Number(this.size))
      : this.strokeWidth;
  }
}