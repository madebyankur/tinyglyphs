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
  <path d="M1 3H11.5C12.3284 3 13 3.67157 13 4.5V15M10.25 5.75H10.26M8 8H8.01M5.75 10.25H5.76M3 1V11.5C3 12.3284 3.67157 13 4.5 13H15" stroke-linecap="round" stroke-linejoin="round"/>
</svg>