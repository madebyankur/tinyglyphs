import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-warning',
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
      <path d="M8 7.25V9.25M8 12H8.01M1.17647 12.7941L6.67647 2.48162C7.24117 1.42279 8.75882 1.42279 9.32353 2.48162L14.8235 12.7941C15.3564 13.7933 14.6324 15 13.5 15H2.5C1.36762 15 0.643582 13.7933 1.17647 12.7941Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class WarningIconComponent {
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