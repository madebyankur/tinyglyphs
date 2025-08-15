import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-star',
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
      <path d="M7.55161 1.40849C7.73501 1.03687 8.26493 1.03687 8.44834 1.40849L10.2348 5.02821C10.3076 5.17578 10.4484 5.27807 10.6112 5.30173L14.6058 5.88218C15.016 5.94177 15.1797 6.44576 14.8829 6.73503L11.9924 9.55259C11.8746 9.66745 11.8208 9.83295 11.8486 9.99515L12.531 13.9736C12.601 14.3821 12.1723 14.6935 11.8055 14.5007L8.23264 12.6223C8.08698 12.5457 7.91296 12.5457 7.7673 12.6223L4.19443 14.5007C3.82761 14.6935 3.3989 14.3821 3.46895 13.9736L4.15131 9.99515C4.17913 9.83295 4.12536 9.66745 4.00751 9.55259L1.11699 6.73503C0.820236 6.44576 0.983992 5.94177 1.3941 5.88218L5.3887 5.30173C5.55155 5.27807 5.69234 5.17578 5.76517 5.02821L7.55161 1.40849Z"/>
    </svg>
  `
})
export class StarIconComponent {
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