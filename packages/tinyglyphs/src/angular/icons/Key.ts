import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-key',
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
      <path d="M14.8241 5.25C14.8241 3.04086 13.0332 1.25 10.8241 1.25C8.61495 1.25 6.82409 3.04086 6.82409 5.25C6.82409 5.3626 6.82874 5.47412 6.83787 5.58437C6.88433 6.14583 6.76687 6.73313 6.36849 7.13151L2.05094 11.4491C1.53811 11.9619 1.25 12.6574 1.25 13.3827V13.463C1.25 14.1738 1.82623 14.75 2.53705 14.75H3.0741C3.48831 14.75 3.8241 14.4142 3.8241 14C3.8241 13.5858 4.15988 13.25 4.5741 13.25C4.98831 13.25 5.3241 12.9142 5.3241 12.5C5.3241 12.0858 5.65988 11.75 6.0741 11.75H6.38476C6.66606 11.75 6.93584 11.6383 7.13476 11.4393L8.87614 9.69796C9.28015 9.29394 9.8777 9.17917 10.4466 9.23242C12.7543 9.44845 14.8241 7.57775 14.8241 5.25Z"/>
<path d="M10 4.75C10 4.33579 10.3358 4 10.75 4C11.1642 4 11.5 4.33579 11.5 4.75C11.5 5.16421 11.1642 5.5 10.75 5.5C10.3358 5.5 10 5.16421 10 4.75Z"/>
    </svg>
  `
})
export class KeyIconComponent {
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