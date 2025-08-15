import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-barchartalt',
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
      <path d="M10.25 15V2.5C10.25 1.67157 9.57843 1 8.75 1H7.25C6.42157 1 5.75 1.67157 5.75 2.5V15M10.25 15H5.75M10.25 15H13.25C14.0784 15 14.75 14.3284 14.75 13.5V10.5C14.75 9.67157 14.0784 9 13.25 9H11.75C10.9216 9 10.25 9.67157 10.25 10.5V15ZM5.75 15V6.5C5.75 5.67157 5.07843 5 4.25 5H2.75C1.92157 5 1.25 5.67157 1.25 6.5V13.5C1.25 14.3284 1.92157 15 2.75 15H5.75Z" stroke-linejoin="round"/>
    </svg>
  `
})
export class BarChartAltIconComponent {
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