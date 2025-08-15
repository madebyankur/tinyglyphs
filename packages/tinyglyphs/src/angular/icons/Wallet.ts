import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-wallet',
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
      <path d="M0.944214 8V11C0.944214 12.6569 2.28736 14 3.94421 14H12C13.6569 14 15 12.6569 15 11V8M0.944214 8V5C0.944214 3.34315 2.28736 2 3.94421 2H12C13.6569 2 15 3.34315 15 5V8M0.944214 8H3.76653C4.54114 8 5.26863 8.37201 5.72211 9C6.17559 9.62799 6.90307 10 7.67768 10H8.17728C8.97667 10 9.73129 9.63096 10.2221 9C10.7129 8.36904 11.4675 8 12.2669 8H15M3.44421 6V5C3.44421 4.72386 3.66807 4.5 3.94421 4.5H11.9442C12.2204 4.5 12.4442 4.72386 12.4442 5V6" stroke-linecap="round"/>
    </svg>
  `
})
export class WalletIconComponent {
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