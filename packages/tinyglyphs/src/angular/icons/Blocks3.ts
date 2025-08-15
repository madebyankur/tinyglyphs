import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-blocks3',
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
      <path d="M1 1.5C1 1.22386 1.22386 1 1.5 1H3.5C3.77614 1 4 1.22386 4 1.5V3.5C4 3.77614 3.77614 4 3.5 4H1.5C1.22386 4 1 3.77614 1 3.5V1.5Z" stroke-linejoin="round"/>
<path d="M1 7C1 6.72386 1.22386 6.5 1.5 6.5H3.5C3.77614 6.5 4 6.72386 4 7V9C4 9.27614 3.77614 9.5 3.5 9.5H1.5C1.22386 9.5 1 9.27614 1 9V7Z" stroke-linejoin="round"/>
<path d="M1 12.5C1 12.2239 1.22386 12 1.5 12H3.5C3.77614 12 4 12.2239 4 12.5V14.5C4 14.7761 3.77614 15 3.5 15H1.5C1.22386 15 1 14.7761 1 14.5V12.5Z" stroke-linejoin="round"/>
<path d="M6.5 1.5C6.5 1.22386 6.72386 1 7 1H9C9.27614 1 9.5 1.22386 9.5 1.5V3.5C9.5 3.77614 9.27614 4 9 4H7C6.72386 4 6.5 3.77614 6.5 3.5V1.5Z" stroke-linejoin="round"/>
<path d="M6.5 7C6.5 6.72386 6.72386 6.5 7 6.5H9C9.27614 6.5 9.5 6.72386 9.5 7V9C9.5 9.27614 9.27614 9.5 9 9.5H7C6.72386 9.5 6.5 9.27614 6.5 9V7Z" stroke-linejoin="round"/>
<path d="M6.5 12.5C6.5 12.2239 6.72386 12 7 12H9C9.27614 12 9.5 12.2239 9.5 12.5V14.5C9.5 14.7761 9.27614 15 9 15H7C6.72386 15 6.5 14.7761 6.5 14.5V12.5Z" stroke-linejoin="round"/>
<path d="M12 1.5C12 1.22386 12.2239 1 12.5 1H14.5C14.7761 1 15 1.22386 15 1.5V3.5C15 3.77614 14.7761 4 14.5 4H12.5C12.2239 4 12 3.77614 12 3.5V1.5Z" stroke-linejoin="round"/>
<path d="M12 7C12 6.72386 12.2239 6.5 12.5 6.5H14.5C14.7761 6.5 15 6.72386 15 7V9C15 9.27614 14.7761 9.5 14.5 9.5H12.5C12.2239 9.5 12 9.27614 12 9V7Z" stroke-linejoin="round"/>
<path d="M12 12.5C12 12.2239 12.2239 12 12.5 12H14.5C14.7761 12 15 12.2239 15 12.5V14.5C15 14.7761 14.7761 15 14.5 15H12.5C12.2239 15 12 14.7761 12 14.5V12.5Z" stroke-linejoin="round"/>
    </svg>
  `
})
export class Blocks3IconComponent {
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