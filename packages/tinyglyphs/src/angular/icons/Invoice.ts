import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-invoice',
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
      <path d="M5 5.5H11M5 8.5H11M5 11.5H8M2 1V12C2 13.6569 3.34315 15 5 15H11C12.6569 15 14 13.6569 14 12V1L13.4142 1.58579C12.6332 2.36683 11.3668 2.36684 10.5858 1.58579L10 1L9.41421 1.58579C8.63317 2.36683 7.36684 2.36684 6.58579 1.58579L6 1L5.41421 1.58579C4.63317 2.36683 3.36684 2.36684 2.58579 1.58579L2 1Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class InvoiceIconComponent {
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