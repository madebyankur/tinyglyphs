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
  <path d="M4.5 8H4.51M8 8H8.01M11.5 8H11.51M4 3H12C13.6569 3 15 4.34315 15 6V10C15 11.6569 13.6569 13 12 13H4C2.34315 13 1 11.6569 1 10V6C1 4.34315 2.34315 3 4 3Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>