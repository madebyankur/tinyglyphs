import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-link',
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
      <path d="M9.41421 3.75736L8 2.34314C6.4379 0.781046 3.90524 0.781045 2.34314 2.34314C0.781046 3.90524 0.781045 6.4379 2.34314 8L3.75736 9.41421M12.2426 6.58578L13.6569 8C15.2189 9.56209 15.2189 12.0948 13.6569 13.6569C12.0948 15.2189 9.56209 15.2189 8 13.6569L6.58578 12.2426M5.17157 5.17157L10.8284 10.8284" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class LinkIconComponent {
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