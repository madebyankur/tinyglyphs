import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-fork',
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
      <path d="M4 5C2.89543 5 2 4.10457 2 3C2 1.89543 2.89543 1 4 1C5.10457 1 6 1.89543 6 3C6 4.10457 5.10457 5 4 5ZM4 5V8M4 11C5.10457 11 6 11.8954 6 13C6 14.1046 5.10457 15 4 15C2.89543 15 2 14.1046 2 13C2 11.8954 2.89543 11 4 11ZM4 11V8M4 8H5.90692M7.90692 8H9C10.6569 8 12 6.65685 12 5M12 5C10.8954 5 10 4.10457 10 3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3C14 4.10457 13.1046 5 12 5Z" stroke-linecap="round"/>
    </svg>
  `
})
export class ForkIconComponent {
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