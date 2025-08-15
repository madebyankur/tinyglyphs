import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-airplay',
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
      <path d="M3 12C1.89543 12 1 11.1046 1 10V5C1 3.34315 2.34315 2 4 2H12C13.6569 2 15 3.34315 15 5V10C15 11.1046 14.1046 12 13 12M5.20711 14H10.7929C11.2383 14 11.4614 13.4614 11.1464 13.1464L8.35355 10.3536C8.15829 10.1583 7.84171 10.1583 7.64645 10.3536L4.85355 13.1464C4.53857 13.4614 4.76165 14 5.20711 14Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class AirplayIconComponent {
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