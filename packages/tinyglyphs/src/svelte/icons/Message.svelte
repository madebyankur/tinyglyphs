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
  <path d="M5 4.5H11M5 7.5H8M1 4C1 2.34315 2.34315 1 4 1H12C13.6569 1 15 2.34315 15 4V8C15 9.65685 13.6569 11 12 11H5.69857C4.64478 11 3.66826 11.5529 3.12609 12.4565L2.85749 12.9042C2.33568 13.7739 1 13.4039 1 12.3897V4Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>