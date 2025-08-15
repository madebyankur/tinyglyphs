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
  <path d="M4 12.5L5.2 9.50002M5.2 9.50002L7.53576 3.66062C7.70339 3.24155 8.29661 3.24155 8.46424 3.66062L10.8 9.50002M5.2 9.50002H10.8M10.8 9.50002L12 12.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>