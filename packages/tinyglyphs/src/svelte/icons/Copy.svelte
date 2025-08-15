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
  <path d="M10.5 3C10.5 1.89543 9.60457 1 8.5 1H4C2.34315 1 1 2.34315 1 4V8.5C1 9.60457 1.89543 10.5 3 10.5M12 15H8C6.34315 15 5 13.6569 5 12V8C5 6.34315 6.34315 5 8 5H12C13.6569 5 15 6.34315 15 8V12C15 13.6569 13.6569 15 12 15Z" stroke-linecap="round"/>
</svg>