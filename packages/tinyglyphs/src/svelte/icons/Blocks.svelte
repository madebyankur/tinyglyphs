<script lang="ts">
  export let size: number | string = 16;
  export let color: string = 'currentColor';
  export let strokeWidth: number | string = 1;
  export let absoluteStrokeWidth: boolean = false;

  $: actualStrokeWidth = absoluteStrokeWidth
    ? Number(strokeWidth) * (16 / Number(size))
    : strokeWidth;
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 16 16"
  fill="none"
  stroke={color}
  stroke-width={actualStrokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon {$$props.class || ''}"
  {...$$restProps}
>
  <path d="M1.6499 3.1499C1.6499 2.32148 2.32148 1.6499 3.1499 1.6499H5.1499C5.97833 1.6499 6.6499 2.32148 6.6499 3.1499V5.1499C6.6499 5.97833 5.97833 6.6499 5.1499 6.6499H3.1499C2.32148 6.6499 1.6499 5.97833 1.6499 5.1499V3.1499Z" stroke-linejoin="round"/>
<path d="M1.6499 10.8999C1.6499 10.0715 2.32148 9.3999 3.1499 9.3999H5.1499C5.97833 9.3999 6.6499 10.0715 6.6499 10.8999V12.8999C6.6499 13.7283 5.97833 14.3999 5.1499 14.3999H3.1499C2.32148 14.3999 1.6499 13.7283 1.6499 12.8999V10.8999Z" stroke-linejoin="round"/>
<path d="M9.3999 10.8999C9.3999 10.0715 10.0715 9.3999 10.8999 9.3999H12.8999C13.7283 9.3999 14.3999 10.0715 14.3999 10.8999V12.8999C14.3999 13.7283 13.7283 14.3999 12.8999 14.3999H10.8999C10.0715 14.3999 9.3999 13.7283 9.3999 12.8999V10.8999Z" stroke-linejoin="round"/>
<path d="M9.3999 3.1499C9.3999 2.32148 10.0715 1.6499 10.8999 1.6499H12.8999C13.7283 1.6499 14.3999 2.32148 14.3999 3.1499V5.1499C14.3999 5.97833 13.7283 6.6499 12.8999 6.6499H10.8999C10.0715 6.6499 9.3999 5.97833 9.3999 5.1499V3.1499Z" stroke-linejoin="round"/>
</svg>