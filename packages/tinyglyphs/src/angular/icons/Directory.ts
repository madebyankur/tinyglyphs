import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-directory',
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
      <path d="M9.49992 2H10.6458C11.7821 2 12.8209 2.64201 13.3291 3.65836L13.4999 4M1 11V5C1 3.34315 2.34315 2 4 2H6.07295C6.64111 2 7.1605 2.321 7.41459 2.82918L8.58541 5.17082C8.8395 5.679 9.35889 6 9.92705 6H13.5C14.3284 6 15 6.67157 15 7.5V11C15 12.6569 13.6569 14 12 14H4C2.34315 14 1 12.6569 1 11Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class DirectoryIconComponent {
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