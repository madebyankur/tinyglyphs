import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-calendar',
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
      <path d="M4 6H12M13.5 2L13.6641 2.1094C14.4987 2.6658 15 3.60249 15 4.60555V12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12V4.60555C1 3.60249 1.5013 2.6658 2.3359 2.1094L2.5 2M7.5 2H8.5M5 1V3M11 1V3" stroke-linecap="round"/>
    </svg>
  `
})
export class CalendarIconComponent {
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