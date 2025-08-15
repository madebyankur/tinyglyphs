import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-bluetooth',
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
      <path d="M4 4L8.5 7.97059M8.5 7.97059L8.53333 8M8.5 7.97059V8.02941M8.5 7.97059V1L12.5 4.5L8.53333 8M8.53333 8L12.5 11.5L8.5 15V8.02941M8.53333 8L8.5 8.02941M8.5 8.02941L4 12" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class BluetoothIconComponent {
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