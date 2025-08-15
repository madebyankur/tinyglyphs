import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-archive',
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
      <path d="M6 8H10M2 5L2.34258 11.1664C2.4309 12.7562 3.74576 14 5.33796 14H10.662C12.2542 14 13.5691 12.7562 13.6574 11.1664L14 5M2.5 2H13.5C14.3284 2 15 2.67157 15 3.5C15 4.32843 14.3284 5 13.5 5H2.5C1.67157 5 1 4.32843 1 3.5C1 2.67157 1.67157 2 2.5 2Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class ArchiveIconComponent {
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