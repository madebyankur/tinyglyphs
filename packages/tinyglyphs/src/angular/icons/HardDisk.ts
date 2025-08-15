import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-harddisk',
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
      <path d="M12 12H12.01M15 12C15 10.3431 13.6569 9 12 9H4C2.34315 9 1 10.3431 1 12M15 12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12M15 12L13.8538 3.59468C13.6511 2.10822 12.3815 1.00002 10.8813 1.00002H5.11867C3.61846 1.00002 2.34888 2.10822 2.14618 3.59468L1 12" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class HardDiskIconComponent {
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