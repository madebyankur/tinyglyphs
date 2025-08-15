import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-fileplus',
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
      <path d="M9.5 1H5C3.34315 1 2 2.34315 2 4V12C2 13.6569 3.34315 15 5 15H11C12.6569 15 14 13.6569 14 12V5.5M9.5 1L14 5.5M9.5 1V4C9.5 4.82843 10.1716 5.5 11 5.5H14M7.75 8.5V11.5M9.25 10H6.25" stroke-linecap="round"/>
    </svg>
  `
})
export class FilePlusIconComponent {
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