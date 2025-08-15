import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-eyeoff',
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
      <path d="M9.00003 3.48155C4.87762 2.93117 -1.13821 6.88285 3.00003 10.662M13.6397 6C17.0068 9.94682 9.88064 13.1203 6.50003 12.4345M9.93702 8.5C9.75613 9.2028 9.20283 9.7561 8.50003 9.93699M7.50003 6.06301C6.79723 6.2439 6.24393 6.7972 6.06304 7.5M14 2L2.00003 14" stroke-linecap="round"/>
    </svg>
  `
})
export class EyeOffIconComponent {
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