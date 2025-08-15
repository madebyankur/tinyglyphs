import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-angular',
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
      <path d="M5.98077 9.25L5.5 10.5M5.98077 9.25H10.0192M5.98077 9.25L8 4L10.0192 9.25M10.0192 9.25L10.5 10.5M1.5 3L8 1L14.5 3L13 12L8 15L3 12L1.5 3Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class AngularIconComponent {
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