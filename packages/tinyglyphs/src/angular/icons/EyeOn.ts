import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-eyeon',
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
      <path d="M1.72593 6.85926C4.64821 2.26709 11.3518 2.26709 14.2741 6.85926V6.85926C14.717 7.55526 14.717 8.44474 14.2741 9.14074V9.14074C11.3518 13.7329 4.64821 13.7329 1.72593 9.14074V9.14074C1.28301 8.44474 1.28301 7.55526 1.72593 6.85926V6.85926Z"/>
<rect x="6" y="6" width="4" height="4" rx="2"/>
<path d="M1 3.5V3.5C5.18741 0.508993 10.8126 0.508993 15 3.5V3.5" stroke-linecap="round" stroke-dasharray="0 4"/>
    </svg>
  `
})
export class EyeOnIconComponent {
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