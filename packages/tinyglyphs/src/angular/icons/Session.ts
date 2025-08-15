import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-session',
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
      <g clip-path="url(#clip0_324_2278)">
<path d="M7.99998 4V8L9.99998 10M0.999975 6C0.999975 6 1.50844 4.96118 2.4465 3.73867C3.38456 2.51616 4.6998 1.63735 6.18824 1.23852C7.67667 0.839697 9.25511 0.943154 10.6788 1.53284C12.1024 2.12254 13.2917 3.16551 14.0621 4.5C14.8326 5.83449 15.1412 7.38592 14.9401 8.91368C14.7389 10.4414 14.0393 11.8601 12.9497 12.9497C11.8601 14.0393 10.4414 14.739 8.91365 14.9401M0.999975 6L0.999975 3M0.999975 6H3.99998M0.974976 8.25H0.984976M1.47495 10.6H1.48495M2.74998 12.65H2.75998M4.69998 14.15H4.70998M6.89999 14.9H6.90999" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_324_2278">
<rect width="16" height="16"/>
</clipPath>
</defs>
    </svg>
  `
})
export class SessionIconComponent {
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