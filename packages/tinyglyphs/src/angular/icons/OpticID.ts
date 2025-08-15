import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-opticid',
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
      <path d="M8.00001 8.00001H8.01001M7.17418 5.16657C5.87795 5.51389 4.95064 6.72239 4.95064 8.06434M7.17418 10.9621C7.68285 11.0984 8.21843 11.0984 8.7271 10.9621M10.8484 7.28789C10.9847 7.79655 10.9847 8.33214 10.8484 8.8408M14.858 7.47247C14.951 7.81801 14.951 8.18201 14.858 8.52755C12.9713 15.5353 3.02873 15.5353 1.14204 8.52755C1.04901 8.18201 1.04901 7.81801 1.14204 7.47247C3.02873 0.464743 12.9713 0.464742 14.858 7.47247Z" stroke-linecap="round"/>
    </svg>
  `
})
export class OpticIDIconComponent {
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