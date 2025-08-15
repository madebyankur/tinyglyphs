import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-edit',
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
      <path d="M7 2H4C2.34315 2 1 3.34315 1 5V12C1 13.6569 2.34315 15 4 15H11C12.6569 15 14 13.6569 14 12V9M10 3L13 6M5.43934 7.56066L11.3787 1.62132C11.7765 1.22349 12.3161 1 12.8787 1C14.0503 1 15 1.94975 15 3.12132C15 3.68393 14.7765 4.2235 14.3787 4.62132L8.43934 10.5607C8.15804 10.842 7.7765 11 7.37868 11H5V8.62132C5 8.2235 5.15804 7.84196 5.43934 7.56066Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class EditIconComponent {
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