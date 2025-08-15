import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-mappin',
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
      <path d="M11.9483 11.6157L8.75722 14.351C8.3215 14.7244 7.67853 14.7244 7.2428 14.351L4.05171 11.6157C2.20181 10.0301 1.47994 7.49165 2.21869 5.16988C4.01213 -0.466661 11.9879 -0.466662 13.7813 5.16988C14.5201 7.49165 13.7982 10.0301 11.9483 11.6157Z"/>
<path d="M5.50001 6.5C5.50001 5.11929 6.6193 4 8.00001 4C9.38072 4 10.5 5.11929 10.5 6.5C10.5 7.88071 9.38072 9 8.00001 9C6.6193 9 5.50001 7.88071 5.50001 6.5Z"/>
    </svg>
  `
})
export class MapPinIconComponent {
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