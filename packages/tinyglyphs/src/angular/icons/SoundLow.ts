import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-soundlow',
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
      <path d="M1 8.62426V7.37574C1 6.61594 1.61594 6 2.37574 6C2.77245 6 3.14985 5.82875 3.41108 5.53019L6.05179 2.51224C6.33662 2.18672 6.74811 2 7.18065 2H8V14H7.18065C6.74811 14 6.33662 13.8133 6.05179 13.4878L3.41108 10.4698C3.14985 10.1713 2.77245 10 2.37574 10C1.61594 10 1 9.38406 1 8.62426Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class SoundLowIconComponent {
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