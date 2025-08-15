import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-message',
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
      <path d="M5 4.5H11M5 7.5H8M1 4C1 2.34315 2.34315 1 4 1H12C13.6569 1 15 2.34315 15 4V8C15 9.65685 13.6569 11 12 11H5.69857C4.64478 11 3.66826 11.5529 3.12609 12.4565L2.85749 12.9042C2.33568 13.7739 1 13.4039 1 12.3897V4Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class MessageIconComponent {
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