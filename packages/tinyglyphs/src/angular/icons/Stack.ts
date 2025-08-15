import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-stack',
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
      <path d="M1.75 3.5C1.75 2.67157 2.42157 2 3.25 2H5.25C6.07843 2 6.75 2.67157 6.75 3.5V12.5C6.75 13.3284 6.07843 14 5.25 14H3.25C2.42157 14 1.75 13.3284 1.75 12.5V3.5Z" stroke-linecap="round"/>
<path d="M9.25 3.5C9.25 2.67157 9.92157 2 10.75 2H12.75C13.5784 2 14.25 2.67157 14.25 3.5V12.5C14.25 13.3284 13.5784 14 12.75 14H10.75C9.92157 14 9.25 13.3284 9.25 12.5V3.5Z" stroke-linecap="round"/>
    </svg>
  `
})
export class StackIconComponent {
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