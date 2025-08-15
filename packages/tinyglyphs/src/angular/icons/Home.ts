import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-home',
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15C6.27614 15 6.5 14.7761 6.5 14.5V10.5C6.5 9.67157 7.17157 8.99999 8 8.99999C8.82843 8.99999 9.5 9.67157 9.5 10.5V14.5C9.5 14.7761 9.72386 15 10 15H14.5C14.7761 15 15 14.7761 15 14.5V6.48188C15 5.36592 14.3806 4.3422 13.392 3.82439L9.39202 1.72915C8.52019 1.27247 7.47981 1.27247 6.60798 1.72915L2.60798 3.82439C1.61943 4.3422 1 5.36593 1 6.48188V14.5C1 14.7761 1.22386 15 1.5 15H6Z"/>
    </svg>
  `
})
export class HomeIconComponent {
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