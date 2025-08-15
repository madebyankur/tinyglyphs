import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-help',
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
      <path d="M6 5.73895C6.05771 5.30245 6.25846 4.89711 6.57112 4.58579C6.88377 4.27447 7.29086 4.07458 7.72923 4.01711C8.16761 3.95965 8.61278 4.04782 8.9957 4.26795C9.37863 4.48809 9.6779 4.82788 9.8471 5.23464C10.0163 5.64139 10.046 6.09237 9.93156 6.51764C9.81712 6.94291 9.56495 7.31869 9.21416 7.58671C9.13213 7.64938 9.04578 7.70534 8.95596 7.75431C8.46908 8.01972 7.99399 8.45121 7.99717 9.00573L8 9.5M8 12H8.01M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
})
export class HelpIconComponent {
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