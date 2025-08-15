import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-database-1',
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
      <ellipse cx="8" cy="4" rx="6" ry="3" stroke-width="1.5"/>
<path d="M2 8C2 9.65685 4.68629 11 8 11C8.34071 11 8.67479 10.9858 9 10.9585" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 12C2 13.6569 4.68629 15 8 15C8.70127 15 9.37444 14.9398 10 14.8293" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 4V12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 4V8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 10.5V14.5" stroke-width="1.5" stroke-linecap="round"/>
<path d="M15 12.5L11 12.5" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `
})
export class Database1IconComponent {
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