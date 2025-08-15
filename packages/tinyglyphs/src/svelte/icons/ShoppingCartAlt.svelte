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
  <path d="M5.50001 3C5.50001 1.89543 6.39544 1 7.50001 1H8.50001C9.60458 1 10.5 1.89543 10.5 3M10.5 11.5H10.51M11 8.5H11.01M8.00001 8.5H8.01001M5.00001 8.5H5.01001M5.50001 11.5H5.51001M8.00001 11.5H8.01001M14.8351 6.64926L14.2702 12.2985C14.1168 13.8321 12.8263 15 11.2851 15H4.71498C3.17372 15 1.88322 13.8321 1.72986 12.2985L1.16494 6.64926C1.07664 5.76623 1.77006 5 2.65749 5H13.3425C14.23 5 14.9234 5.76623 14.8351 6.64926Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>