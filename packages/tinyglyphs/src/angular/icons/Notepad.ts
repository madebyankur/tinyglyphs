import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-notepad',
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
      <path d="M12 2.5C13.1046 2.5 14 3.39543 14 4.5V11.5C14 13.1569 12.6569 14.5 11 14.5H5C3.34315 14.5 2 13.1569 2 11.5V4.5C2 3.39543 2.89543 2.5 4 2.5M5 7.5H11M5 10.5H11M6.5 1.5V4.5M9.5 1.5V4.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class NotepadIconComponent {
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