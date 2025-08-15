import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-micoff',
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
      <path d="M6 7V3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3M13 7C13 9.76142 10.7614 12 8 12C7.65753 12 7.32311 11.9656 7 11.9M3.66891 9.5C3.24349 8.76457 3 7.91072 3 7M6 15H10M15 1L1 15" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class MicOffIconComponent {
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