import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-voice',
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
      <path d="M8 5.42857C9.42016 6.84873 9.42016 9.15127 8 10.5714M10 3.71428C12.3669 6.08122 12.3669 9.91878 10 12.2857M12 2C15.3137 5.31371 15.3137 10.6863 12 14M1 2H2C3.10457 2 4 2.89543 4 4V12C4 13.1046 3.10457 14 2 14H1" stroke-linecap="round"/>
    </svg>
  `
})
export class VoiceIconComponent {
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