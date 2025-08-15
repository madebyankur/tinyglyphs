import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-spaceship',
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
      <path d="M7.44975 8.1066L8.57107 14.0563L9.44414 12.5922C10.9642 10.0431 12.1222 7.29498 12.8849 4.42678L13.5208 2.03553L11.5203 2.54101C8.34902 3.34227 5.31938 4.625 2.53692 6.34449L1.5 6.98528L7.44975 8.1066Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class SpaceshipIconComponent {
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