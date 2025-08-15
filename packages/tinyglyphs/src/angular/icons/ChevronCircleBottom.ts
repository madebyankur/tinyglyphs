import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-chevroncirclebottom',
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
      <g clip-path="url(#clip0_59_3732)">
<path d="M5 7L8 10L11 7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 8C1 4.13401 4.13401 1 8 1V1C11.866 1 15 4.13401 15 8V8C15 11.866 11.866 15 8 15V15C4.13401 15 1 11.866 1 8V8Z" stroke-width="1.5"/>
</g>
<defs>
<clipPath id="clip0_59_3732">
<rect width="16" height="16"/>
</clipPath>
</defs>
    </svg>
  `
})
export class ChevronCircleBottomIconComponent {
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