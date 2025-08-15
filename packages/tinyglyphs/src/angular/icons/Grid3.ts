import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-grid3',
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
      <path d="M5.75 1H4C2.34315 1 1 2.34315 1 4V5.75M5.75 1H12C13.6569 1 15 2.34315 15 4V5.75M5.75 1V15M5.75 15H12C13.6569 15 15 13.6569 15 12V5.75M5.75 15H4C2.34315 15 1 13.6569 1 12V5.75M1 5.75H15M10.25 1V15M1 10.25H15" stroke-linejoin="round"/>
    </svg>
  `
})
export class Grid3IconComponent {
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