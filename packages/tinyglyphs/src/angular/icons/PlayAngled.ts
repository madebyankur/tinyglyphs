import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-playangled',
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
      <path d="M1 4.79336C1 3.21944 2.21634 1.91312 3.78626 1.80098L11.7863 1.22955C13.5229 1.10551 15 2.4809 15 4.22193V11.7781C15 13.5191 13.5229 14.8945 11.7863 14.7704L3.78626 14.199C2.21634 14.0869 1 12.7806 1 11.2066V4.79336Z" stroke-linejoin="round"/>
<path d="M6 6.76619V9.23381C6 10.0111 6.84797 10.4912 7.5145 10.0913L10.2854 8.42875C10.6091 8.23455 10.6091 7.76546 10.2854 7.57125L7.5145 5.9087C6.84797 5.50878 6 5.9889 6 6.76619Z" stroke-linejoin="round"/>
    </svg>
  `
})
export class PlayAngledIconComponent {
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