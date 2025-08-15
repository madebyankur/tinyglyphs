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
  <path d="M7.5 14.5L8.55216 12.3957M8.55216 12.3957L11 7.5L13.4478 12.3957M8.55216 12.3957H13.4478M13.4478 12.3957L14.5 14.5M1 3H5.5M5.5 3V1.5M5.5 3H8.5M8.5 3H10M8.5 3C8.16667 5 6.2 9 1 9M3 5C3.5 6.33333 5.3 9 8.5 9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>