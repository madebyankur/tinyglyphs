import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-soundx',
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
      <path d="M11 10L15 6M15 10L11 6M1 7.37574V8.62426C1 9.38406 1.61594 10 2.37574 10C2.77245 10 3.14985 10.1713 3.41108 10.4698L6.05179 13.4878C6.33662 13.8133 6.74811 14 7.18065 14H8V2H7.18065C6.74811 2 6.33662 2.18672 6.05179 2.51224L3.41108 5.53019C3.14985 5.82875 2.77245 6 2.37574 6C1.61594 6 1 6.61594 1 7.37574Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class SoundXIconComponent {
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