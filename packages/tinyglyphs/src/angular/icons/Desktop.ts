import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-desktop',
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
      <path d="M4.5 9H11.5M4.2851 1H11.7149C13.479 1 14.8623 2.51476 14.7026 4.27161L14.248 9.2716C14.1076 10.8168 12.812 12 11.2604 12H4.73964C3.18803 12 1.89244 10.8168 1.75196 9.27161L1.29742 4.27161C1.1377 2.51476 2.521 1 4.2851 1ZM7 15H9C9.55228 15 10 14.5523 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 14.5523 6.44771 15 7 15Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class DesktopIconComponent {
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