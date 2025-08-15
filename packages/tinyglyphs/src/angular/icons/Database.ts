import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-database',
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
      <path d="M14 4C14 5.65685 11.3137 7 8 7C4.68629 7 2 5.65685 2 4M14 4C14 2.34315 11.3137 1 8 1C4.68629 1 2 2.34315 2 4M14 4V12C14 13.6569 11.3137 15 8 15C4.68629 15 2 13.6569 2 12V4M14 8C14 9.65685 11.3137 11 8 11C4.68629 11 2 9.65685 2 8"/>
    </svg>
  `
})
export class DatabaseIconComponent {
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