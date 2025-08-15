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
  <path d="M10 11C10 12.6569 8.65685 14 7 14H4C2.34315 14 1 12.6569 1 11V5C1 3.34315 2.34315 2 4 2H7C8.65685 2 10 3.34315 10 5M5 8H15M5 8L7 6M5 8L7 10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>