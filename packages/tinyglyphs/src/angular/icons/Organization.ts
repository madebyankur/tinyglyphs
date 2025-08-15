import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-organization',
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
      <path d="M11 15H12C13.6569 15 15 13.6569 15 12V7C15 5.34315 13.6569 4 12 4M4 5H7M4 8H7M4 11H7M12 8H12.01M12 11H12.01M1 4V12C1 13.6569 2.34315 15 4 15H7C8.65685 15 10 13.6569 10 12V4C10 2.34315 8.65685 1 7 1H4C2.34315 1 1 2.34315 1 4Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class OrganizationIconComponent {
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