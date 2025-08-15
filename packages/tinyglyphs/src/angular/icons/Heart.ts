import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-heart',
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
      <path d="M8 3.34314L8.17157 3.17157C8.73098 2.61216 9.44371 2.2312 10.2196 2.07686C10.9956 1.92252 11.7998 2.00173 12.5307 2.30448C13.2616 2.60723 13.8864 3.11992 14.3259 3.77772C14.7654 4.43552 15 5.20888 15 6C15 8.4735 13.6746 10.7574 11.527 11.9846L8 14L4.47297 11.9846C2.32537 10.7574 1 8.4735 1 6C1 5.20888 1.2346 4.43552 1.67412 3.77772C2.11365 3.11992 2.73836 2.60723 3.46927 2.30448C4.20017 2.00173 5.00444 1.92252 5.78036 2.07686C6.55628 2.2312 7.26902 2.61216 7.82843 3.17157L8 3.34314ZM8 3.34314V4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class HeartIconComponent {
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