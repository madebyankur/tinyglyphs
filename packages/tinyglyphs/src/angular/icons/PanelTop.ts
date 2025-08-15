import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-paneltop',
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
      <g clip-path="url(#clip0_261_2743)">
<path d="M4 6H12M6 1H4C2.34315 1 1 2.34315 1 4V12C1 13.6569 2.34315 15 4 15H6H12C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1H6Z" stroke-width="1.5" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_261_2743">
<rect width="16" height="16"/>
</clipPath>
</defs>
    </svg>
  `
})
export class PanelTopIconComponent {
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