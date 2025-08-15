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
  <path d="M9 11C9 12.6569 7.65685 14 6 14H4C2.34315 14 1 12.6569 1 11V5C1 3.34315 2.34315 2 4 2H6C7.65685 2 9 3.34315 9 5M5 8H15M15 8L13 6M15 8L13 10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>