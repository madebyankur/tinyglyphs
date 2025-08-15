import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-signal',
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
      <path d="M14.3995 11.7112C13.7634 9.33745 12.5138 7.17292 10.776 5.4352C9.0383 3.69748 6.87378 2.44778 4.5 1.81173M10.0711 13.1152C9.61675 11.4196 8.72411 9.87352 7.48288 8.63229C6.24165 7.39105 4.69555 6.49842 3 6.0441M5.74264 14.5191C5.47005 13.5018 4.93447 12.5741 4.18973 11.8294C3.44499 11.0846 2.51733 10.5491 1.5 10.2765M1 15H1.01" stroke-linecap="round"/>
    </svg>
  `
})
export class SignalIconComponent {
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