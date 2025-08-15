import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-copy',
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
      <path d="M10.5 3C10.5 1.89543 9.60457 1 8.5 1H4C2.34315 1 1 2.34315 1 4V8.5C1 9.60457 1.89543 10.5 3 10.5M12 15H8C6.34315 15 5 13.6569 5 12V8C5 6.34315 6.34315 5 8 5H12C13.6569 5 15 6.34315 15 8V12C15 13.6569 13.6569 15 12 15Z" stroke-linecap="round"/>
    </svg>
  `
})
export class CopyIconComponent {
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