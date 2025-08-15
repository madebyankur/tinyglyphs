import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-terminal2',
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
      <g clip-path="url(#clip0_261_2648)">
<path d="M5 5L7 7L5 9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11H11" stroke-width="1.5" stroke-linecap="round"/>
<rect x="1" y="1" width="14" height="14" rx="3" stroke-width="1.5"/>
</g>
<defs>
<clipPath id="clip0_261_2648">
<rect width="16" height="16"/>
</clipPath>
</defs>
    </svg>
  `
})
export class Terminal2IconComponent {
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