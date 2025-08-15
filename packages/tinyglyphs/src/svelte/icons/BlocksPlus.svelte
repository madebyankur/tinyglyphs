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
  <path d="M11.8899 9.8999V11.8999M11.8899 11.8999V13.8999M11.8899 11.8999H9.88989M11.8899 11.8999H13.8899M3.13989 6.6499H5.13989C5.96832 6.6499 6.63989 5.97833 6.63989 5.1499V3.1499C6.63989 2.32148 5.96832 1.6499 5.13989 1.6499H3.13989C2.31147 1.6499 1.63989 2.32148 1.63989 3.1499V5.1499C1.63989 5.97833 2.31147 6.6499 3.13989 6.6499ZM3.13989 14.3999H5.13989C5.96832 14.3999 6.63989 13.7283 6.63989 12.8999V10.8999C6.63989 10.0715 5.96832 9.3999 5.13989 9.3999H3.13989C2.31147 9.3999 1.63989 10.0715 1.63989 10.8999V12.8999C1.63989 13.7283 2.31147 14.3999 3.13989 14.3999ZM10.8899 6.6499H12.8899C13.7183 6.6499 14.3899 5.97833 14.3899 5.1499V3.1499C14.3899 2.32148 13.7183 1.6499 12.8899 1.6499H10.8899C10.0615 1.6499 9.38989 2.32148 9.38989 3.1499V5.1499C9.38989 5.97833 10.0615 6.6499 10.8899 6.6499Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>