import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-databaseplus',
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
      <path d="M14 4C14 5.65685 11.3137 7 8 7C4.68629 7 2 5.65685 2 4M14 4C14 2.34315 11.3137 1 8 1C4.68629 1 2 2.34315 2 4M14 4V8M2 4V12C2 13.6569 4.68629 15 8 15C8.70127 15 9.37444 14.9398 10 14.8293M2 8C2 9.65685 4.68629 11 8 11C8.34071 11 8.67479 10.9858 9 10.9585M13 10.5V14.5M15 12.5H11" stroke-linecap="round"/>
    </svg>
  `
})
export class DatabasePlusIconComponent {
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