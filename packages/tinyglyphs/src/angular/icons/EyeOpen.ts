import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-eyeopen',
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
      <path d="M8 1H8.01M4.25 1.75H4.26M1 3.5H1.01M11.5 1.75H11.51M15 3.5H15.01M14.2741 6.85926C14.717 7.55526 14.717 8.44474 14.2741 9.14074C11.3518 13.7329 4.64821 13.7329 1.72593 9.14074C1.28301 8.44474 1.28301 7.55527 1.72593 6.85926C4.64821 2.26709 11.3518 2.26709 14.2741 6.85926ZM8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class EyeOpenIconComponent {
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