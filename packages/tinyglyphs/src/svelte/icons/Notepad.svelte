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
  <path d="M12 2.5C13.1046 2.5 14 3.39543 14 4.5V11.5C14 13.1569 12.6569 14.5 11 14.5H5C3.34315 14.5 2 13.1569 2 11.5V4.5C2 3.39543 2.89543 2.5 4 2.5M5 7.5H11M5 10.5H11M6.5 1.5V4.5M9.5 1.5V4.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>