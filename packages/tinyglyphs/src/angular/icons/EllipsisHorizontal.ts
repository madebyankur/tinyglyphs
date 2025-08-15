import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-ellipsishorizontal',
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
      <path d="M7.5 8.25C7.5 7.83579 7.83579 7.5 8.25 7.5C8.66421 7.5 9 7.83579 9 8.25C9 8.66421 8.66421 9 8.25 9C7.83579 9 7.5 8.66421 7.5 8.25Z"/>
<path d="M2.5 8.25C2.5 7.83579 2.83579 7.5 3.25 7.5C3.66421 7.5 4 7.83579 4 8.25C4 8.66421 3.66421 9 3.25 9C2.83579 9 2.5 8.66421 2.5 8.25Z"/>
<path d="M12.5 8.25C12.5 7.83579 12.8358 7.5 13.25 7.5C13.6642 7.5 14 7.83579 14 8.25C14 8.66421 13.6642 9 13.25 9C12.8358 9 12.5 8.66421 12.5 8.25Z"/>
    </svg>
  `
})
export class EllipsisHorizontalIconComponent {
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