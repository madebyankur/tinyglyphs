import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-mic',
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
      <path d="M3 7C3 9.76142 5.23858 12 8 12C10.7614 12 13 9.76142 13 7M6 15H10M8 9C6.89543 9 6 8.10457 6 7V3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3V7C10 8.10457 9.10457 9 8 9Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class MicIconComponent {
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