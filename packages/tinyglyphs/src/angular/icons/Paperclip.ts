import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-paperclip',
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
      <path d="M14 8L9.00002 13C7.34317 14.6569 4.65688 14.6569 3.00003 13C1.34317 11.3431 1.34317 8.65685 3.00003 7L8.00003 2C9.1046 0.895426 10.8955 0.895428 12 2C13.1046 3.10457 13.1046 4.89543 12 6L7.00003 11C6.44774 11.5523 5.55231 11.5523 5.00003 11C4.44774 10.4477 4.44774 9.55228 5.00003 9L9.00003 5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class PaperclipIconComponent {
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