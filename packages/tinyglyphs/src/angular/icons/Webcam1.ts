import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-webcam-1',
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
      <circle cx="10.25" cy="5" r="0.75" stroke-width="1.5"/>
<path d="M1 5C1 2.79086 2.79086 1 5 1H11C13.2091 1 15 2.79086 15 5V5C15 7.20914 13.2091 9 11 9H5C2.79086 9 1 7.20914 1 5V5Z" stroke-width="1.5"/>
<path d="M10.5 11V11.7932C10.5 12.886 10.9341 13.9341 11.7069 14.7069V14.7069C11.8151 14.8151 11.7385 15 11.5855 15H4.4145C4.26154 15 4.18494 14.8151 4.2931 14.7069V14.7069C5.06586 13.9341 5.5 12.886 5.5 11.7932V11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class Webcam1IconComponent {
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