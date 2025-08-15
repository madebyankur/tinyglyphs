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
  <path d="M8 14H8.01M1 6C4.75156 1.98047 11.177 1.95352 14.8995 6M3 8.5C5.84249 5.94176 10.1575 5.94176 13 8.5M6 11C7.10457 9.89543 8.89543 9.89543 10 11" stroke-linecap="round" stroke-linejoin="round"/>
</svg>