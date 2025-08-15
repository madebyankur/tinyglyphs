import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-control',
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
      <path d="M4 4H4.01M12 12H12.01M4 7H12C13.6569 7 15 5.65685 15 4C15 2.34315 13.6569 1 12 1H4C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7ZM4 15H12C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9H4C2.34315 9 1 10.3431 1 12C1 13.6569 2.34315 15 4 15Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class ControlIconComponent {
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