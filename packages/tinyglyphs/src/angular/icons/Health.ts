import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-health',
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
      <path d="M14.75 7.38981H14.3422C13.3708 7.38981 12.4875 7.95241 12.0767 8.83259L9.89449 13.5087C9.69028 13.9464 9.04582 13.8689 8.95111 13.3954L8.3125 10.2023M1.75 7.38981H1.9481C3.02418 7.38981 3.97953 6.70123 4.31981 5.68038L5.65461 1.67597C5.81675 1.18955 6.51869 1.23325 6.61924 1.73603L7 3.63981M7.5625 6.45231L7.75 7.38981" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class HealthIconComponent {
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