import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-sparkle',
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
      <path d="M7.77149 1.72535C7.84399 1.49519 8.16824 1.49117 8.24644 1.71945L9.07193 4.12922C9.52245 5.44441 10.5556 6.47752 11.8708 6.92805L14.2805 7.75354C14.5088 7.83174 14.5048 8.15599 14.2746 8.2285L11.9766 8.95242C10.6007 9.38587 9.51594 10.4527 9.05969 11.8213L8.24713 14.2587C8.17017 14.4895 7.84227 14.4855 7.77094 14.2529L7.0575 11.9258C6.61974 10.4979 5.50206 9.38024 4.07416 8.94247L1.7471 8.22904C1.51445 8.15772 1.51046 7.82981 1.74131 7.75286L4.17869 6.94028C5.54725 6.48403 6.6141 5.39931 7.04756 4.02337L7.77149 1.72535Z" stroke-linejoin="round"/>
    </svg>
  `
})
export class SparkleIconComponent {
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