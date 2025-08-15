import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-analytics',
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
      <path d="M1 1V13.5C1 14.3284 1.67157 15 2.5 15H15M14.5 2L14.214 2.16341C12.1369 3.35032 10.5402 5.2261 9.70022 7.46607C9.60015 7.73293 9.27182 7.82886 9.04381 7.65786L8.96893 7.6017C7.29544 6.34658 4.88344 7.15795 4.30876 9.16932L3.5 12" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class AnalyticsIconComponent {
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